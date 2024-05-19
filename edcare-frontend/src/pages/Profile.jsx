import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center rounded-full object-cover"
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
          <sapn className="text-red-700 cursor-pointer">Log Out</sapn>
        </div>
      </form>
    </div>
  );
}
