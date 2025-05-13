import React, { useContext } from "react";
import { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { data } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const FantasyUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const [userUpdateValue, setUserUpdateValue] = useState({
    username: userDetails.username || "",
    firstname: userDetails.firstname || "",
    lastname: userDetails.lastname || "",
    email: userDetails.email || "",
    phoneNumber: userDetails.phoneNumber || "",
  });
  const IsAnyChanges = () => {
    return (
      userUpdateValue.firstname !== userDetails.firstname ||
      userUpdateValue.lastname !== userDetails.lastname ||
      userUpdateValue.username !== userDetails.username ||
      userUpdateValue.email !== userDetails.email ||
      userUpdateValue.phoneNumber !== userDetails.phoneNumber
    );
  };
  const getvalue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserUpdateValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const userData = {
    favoriteTeam: "Mumbai Indians",
    playingSince: "2018",
    bio: "Cricket enthusiast and top 1% fantasy player. Specializing in IPL fantasy leagues.",
    totalPoints: 12450,
    currentRank: 42,
    highestRank: 3,
  };


  const updateDetails = async (e) => {
    e.preventDefault();
    if (userUpdateValue) {
      try {
        const res = await axios.post("https://bgc-omega.vercel.app/api/signin", {
          _id: userDetails._id,
          username: userUpdateValue.username,
          firstname: userUpdateValue.firstname,
          lastname: userUpdateValue.lastname,
          email: userUpdateValue.email,
          phoneNumber: userUpdateValue.phoneNumber,
        });
        const data = await res.data;
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(data.message || "Details updated successfully");
        setTimeout(() => {
          setIsEditing(false);
          window.location.reload();
        }, 2000);
      } catch (er) {
        console.log(er);
      }
    } else {
      alert("change some details before updating");
    }
  };
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/chnagepswd", {
        _id: userDetails._id,
        firstname: userDetails.fistname,
        lastname: userDetails.lastname,
        email: userDetails.email,
        phoneNumber: userDetails.phoneNumber,
      });

      setIsEditing(false);
    } catch {
      console.log("error");
    }
    setPasswordError("");
    setPasswordSuccess("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    setPasswordSuccess("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      setIsPasswordPopupOpen(false);
      setPasswordSuccess("");
    }, 2000);
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-500 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-b from-gray-600 to-yellow-600 px-6 py-8 sm:py-12 sm:px-10 text-center">
              <div className="relative mx-auto h-32 w-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                  className="h-full w-full object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-10 left-20 top-20 right-0   text-gray-300 py-1 text-2xl font-medium">
                    <MdAddPhotoAlternate />
                  </button>
                )}
              </div>

              <div className="mt-2">
                {!isEditing ? (
                  <h1 className="text-2xl font-bold text-white">
                    {userDetails.username}
                  </h1>
                ) : (
                  <input
                    type="text"
                    name="username"
                    value={userUpdateValue.username}
                    onChange={getvalue}
                    className="w-full max-w-xs mx-auto px-4 py-2 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-600"
                  />
                )}
                <div className="mt-2 flex justify-center items-center space-x-2">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold">
                    PRO
                  </span>
                  <span className="text-yellow-200">Level 8</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg shadow">
                  <div className="text-gray-500 text-sm">Total Points</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {userData.totalPoints.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow">
                  <div className="text-gray-500 text-sm">Current Rank</div>
                  <div className="text-2xl font-bold text-green-600">
                    #{userData.currentRank}
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow">
                  <div className="text-gray-500 text-sm">Highest Rank</div>
                  <div className="text-2xl font-bold text-purple-600">
                    #{userData.highestRank}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Profile Details
                </h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex justify-center items-center gap-1 px-3 py-1 bg-yellow-500 text-gray-900 rounded-md hover:bg-gray-500 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    <FaUserEdit /> Edit Profile
                  </button>
                ) : null}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    {!isEditing ? (
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                    ) : null}
                    {!isEditing ? (
                      <p className="text-gray-900">
                        {userDetails.firstname} {userDetails.lastname}
                      </p>
                    ) : (
                      <>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          value={userUpdateValue.firstname}
                          onChange={getvalue}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          value={userUpdateValue.lastname}
                          onChange={getvalue}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                      </>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    {!isEditing ? (
                      <p className="text-gray-900">{userDetails.email}</p>
                    ) : (
                      <input
                        type="email"
                        name="email"
                        value={userUpdateValue.email}
                        onChange={getvalue}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    {!isEditing ? (
                      <p className="text-gray-900">{userDetails.phoneNumber}</p>
                    ) : (
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={userUpdateValue.phoneNumber}
                        onChange={getvalue}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Favorite Team
                    </label>
                    {!isEditing ? (
                      <p className="text-gray-900">{userData.favoriteTeam}</p>
                    ) : (
                      <select
                        name="favoriteTeam"
                        value={userData.favoriteTeam}
                        onChange={getvalue}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      >
                        <option value="Mumbai Indians">Mumbai Indians</option>
                        <option value="Chennai Super Kings">
                          Chennai Super Kings
                        </option>
                        <option value="Royal Challengers Bangalore">
                          Royal Challengers Bangalore
                        </option>
                        <option value="Kolkata Knight Riders">
                          Kolkata Riders
                        </option>
                        <option value="Delhi Capitals">Delhi NRI</option>
                        <option value="Punjab Kings">Punjab Kings</option>
                        <option value="Rajasthan Royals">
                          Rajasthan Royals
                        </option>
                        <option value="Sunrisers Hyderabad">
                          Le Hyderabad
                        </option>
                      </select>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Playing Since
                    </label>
                    {!isEditing ? (
                      <p className="text-gray-900">{userData.playingSince}</p>
                    ) : (
                      <input
                        type="text"
                        name="playingSince"
                        value={userData.playingSince}
                        onChange={getvalue}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    {!isEditing ? (
                      <p className="text-gray-900">{userData.bio}</p>
                    ) : (
                      <textarea
                        name="bio"
                        value={userData.bio}
                        onChange={getvalue}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={!IsAnyChanges()}
                      onClick={updateDetails}
                      className={`flex justify-center items-center gap-1 px-3 py-1 bg-yellow-500 text-gray-900 rounded-md hover:bg-gray-500 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors font-medium ${
                        !IsAnyChanges() && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <FiSend />
                      Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsPasswordPopupOpen(true)}
                    className="flex justify-center items-center gap-1 px-3 py-1 bg-yellow-500 text-gray-900 rounded-md hover:bg-gray-500 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    Change Password
                  </button>
                )}
              </div>
            </div>

            <div className="px-6 py-6 sm:px-10 bg-gray-100 border-t">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Fantasy Teams
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "IPL 2023 - Week 5",
                  "IPL 2023 - Week 4",
                  "IPL 2023 - Week 3",
                ].map((team, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-900">{team}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Rank 12
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Points: 245
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Players: 7/11 correct
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {isPasswordPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl w-full max-w-md relative border border-yellow-500 shadow-2xl">
              <button
                className="absolute top-5 right-5 text-gray-300 hover:text-yellow-400 text-2xl bg-transparent border-none cursor-pointer transition-colors duration-200"
                onClick={() => {
                  setIsPasswordPopupOpen(false);
                  setPasswordError("");
                  setPasswordSuccess("");
                }}
              >
                <IoCloseSharp />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                  Change Password
                </h2>
                <p className="text-gray-300 text-sm">
                  Secure your fantasy sports account with a new password
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label
                    htmlFor="currentPassword"
                    className="block text-gray-300 font-medium text-sm"
                  >
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-200 placeholder-gray-400"
                      autoComplete="current-password"
                    />
                    <span className="absolute right-3 top-3 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="newPassword"
                    className="block text-gray-300 font-medium text-sm"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-200 placeholder-gray-400"
                      autoComplete="new-password"
                    />
                    <span className="absolute right-3 top-3 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-300 font-medium text-sm"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-200 placeholder-gray-400"
                      autoComplete="new-password"
                    />
                    <span className="absolute right-3 top-3 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {passwordError && (
                  <div className="p-3 bg-red-900/50 border border-red-500 text-red-200 rounded-lg text-sm text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {passwordError}
                  </div>
                )}

                {passwordSuccess && (
                  <div className="p-3 bg-green-900/50 border border-green-500 text-green-200 rounded-lg text-sm text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {passwordSuccess}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Update Password
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FantasyUserProfile;
