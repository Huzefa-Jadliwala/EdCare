import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [image, setImage] = useState(undefined);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [formData, setFormData] = useState({});
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    if (image) {
      handleImageUpload(image);
    }
  }, [image]);

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
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <input
        type="file"
        ref={fileRef}
        hidden
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      ></input>
      <p>
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
      <form action="" className="flex flex-col gap-4">
        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center rounded-full object-cover"
          onClick={() => fileRef.current.click()}
        />
        <input
          type="text"
          id="username"
          placeholder={currentUser.username}
          className="bg-slate-100 rounded-lg p-3 mt-2"
        />
        <input
          type="email"
          id="email"
          placeholder={currentUser.email}
          className="bg-slate-100 rounded-lg p-3 mt-2"
        />
        <input
          type="password"
          id="password"
          placeholder="New Password"
          className="bg-slate-100 rounded-lg p-3 mt-2"
        />
        <button className="uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80">
          Update
        </button>
        <div className="flex justify-between ">
          <span className="text-red-700 cursor-pointer">Delete Account</span>
          <span className="text-red-700 cursor-pointer">Log Out</span>
        </div>
      </form>
    </div>
  );
}
