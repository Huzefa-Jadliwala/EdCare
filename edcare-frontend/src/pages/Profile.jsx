import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import {
  deleteFailure,
  deleteStart,
  deleteSuccess,
  signOut,
  updateFailure,
  updateStart,
  updateSuccess,
} from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [image, setImage] = useState(undefined);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [formData, setFormData] = useState({});
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [locationName, setLocationName] = useState("Fetching location...");
  useEffect(() => {
    if (image) {
      handleImageUpload(image);
    }
  }, [image]);

  useEffect(() => {
    // Fetch the location name when the component mounts or when home coordinates change
    if (currentUser.homeX && currentUser.homeY) {
      fetchLocationName(currentUser.homeX, currentUser.homeY);
    }
  }, [currentUser.homeX, currentUser.homeY]);

  const fetchLocationName = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
      );
      const address = response.data.address;
      console.log(address);
      const locationName = `${address.road || ""}, ${
        address.city || address.town || address.village || ""
      }, ${address.state || ""}, ${address.country || ""}`;
      setLocationName(locationName);
    } catch (error) {
      console.error("Error fetching location name:", error);
      setLocationName("Unknown location");
    }
  };
  const handleImageUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercentage(Math.round(progress));
      },
      (error) => {
        setImageError(true);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/${currentUser._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateFailure());
        return;
      }
      dispatch(updateSuccess(data));
      setUpdateStatus(true);
    } catch (err) {
      dispatch(updateFailure());
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    try {
      dispatch(deleteStart());
      const res = await fetch(`/api/user/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteFailure());
        return;
      }
      dispatch(deleteSuccess());
      navigate("/signin");
    } catch (err) {
      dispatch(deleteFailure());
    }
  };
  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center rounded-full object-cover"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-700">
              Error Uploading Image(File size must be less then 2MB)
            </span>
          ) : imagePercentage > 0 && imagePercentage < 100 ? (
            <span className="text-slate-700">{`Uploading Image: ${imagePercentage}%`}</span>
          ) : imagePercentage === 100 ? (
            <span className="text-green-700">Image Uploaded Successfully</span>
          ) : (
            ""
          )}
        </p>

        <input
          type="text"
          id="username"
          placeholder={currentUser.username}
          className="bg-slate-100 rounded-lg p-3 mt-2"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder={currentUser.email}
          className="bg-slate-100 rounded-lg p-3 mt-2"
          onChange={handleChange}
          disabled
        />
        <input
          type="password"
          id="password"
          placeholder="New Password"
          className="bg-slate-100 rounded-lg p-3 mt-2"
          onChange={handleChange}
        />
        <input
          type="address"
          id="address"
          placeholder={locationName}
          className="bg-slate-100 rounded-lg p-3 mt-2"
          disabled
        />
        <button className="uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Update"}
        </button>
        <div className="flex justify-between ">
          <span
            className="text-red-700 cursor-pointer"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </span>
          <span className="text-red-700 cursor-pointer" onClick={handleSignout}>
            Log Out
          </span>
        </div>
        <div className="mt-2">
          <p className="text-red-700">{error && "Something went wrong!!"}</p>
          <p className="text-green-700">
            {updateStatus && "User Profile Update Successful!!"}
          </p>
        </div>
      </form>
    </div>
  );
}
