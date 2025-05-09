import React from "react";
import { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FiSend } from "react-icons/fi";


const FantasyUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "FantasyKing",
    name: "Niraj kumawat",
    email: "niraj@example.com",
    phone: "+91 8003767732",
    favoriteTeam: "Mumbai Indians",
    playingSince: "2018",
    bio: "Cricket enthusiast and top 1% fantasy player. Specializing in IPL fantasy leagues.",
    totalPoints: 12450,
    currentRank: 42,
    highestRank: 3,
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const savedeta = () => {
    setIsEditing(false);
  };

  return (
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

            <div className="mt-6">
              {!isEditing ? (
                <h1 className="text-3xl font-bold text-white">
                  {userData.username}
                </h1>
              ) : (
                <input
                  type="text"
                  name="username"
                  value={userData.username}
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  {!isEditing ? (
                    <p className="text-gray-900">{userData.name}</p>
                  ) : (
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={getvalue}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  {!isEditing ? (
                    <p className="text-gray-900">{userData.email}</p>
                  ) : (
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
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
                    <p className="text-gray-900">{userData.phone}</p>
                  ) : (
                    <input
                      type="tel"
                      name="phone"
                      value={userData.phone}
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
                      <option value="Rajasthan Royals">Rajasthan Royals</option>
                      <option value="Sunrisers Hyderabad">Le Hyderabad</option>
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

            {isEditing && (
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={savedeta}
                  className="flex justify-center items-center gap-1 px-3 py-1 bg-yellow-500 text-gray-900 rounded-md hover:bg-gray-500 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors font-medium"
                >
                  <FiSend/>Save Changes
                </button>
              </div>
            )}
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
                  <div className="mt-2 text-sm text-gray-600">Points: 245</div>
                  <div className="mt-1 text-sm text-gray-600">
                    Players: 7/11 correct
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyUserProfile;
