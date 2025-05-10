import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import { context } from "../../../context/context";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaBell,
  FaTrophy,
  FaHome,
  FaChartLine,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export const FantasyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { setIsAuthen } = useContext(context);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthen(false);
    navigate("/login");
  };
  const notifications = [
    {
      id: 1,
      text: "Your team has moved up to 3rd place!",
      time: "2h ago",
      read: false,
    },
    {
      id: 2,
      text: "Player injury alert: John Smith is out for 2 weeks",
      time: "5h ago",
      read: true,
    },
    {
      id: 3,
      text: "Transfer window closes in 24 hours",
      time: "1d ago",
      read: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav
      className={`sticky top-0 left-0 right-0 w-full z-100 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg py-2" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FaTrophy className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold text-white hidden md:block">
                FantasyFC
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to={"/"}
                  className="text-yellow-400 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FaHome className="mr-1" /> Home
                </Link>
                <Link to={"/myteam"}
                  className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FaChartLine className="mr-1" /> My Team
                </Link>
                <Link
                  to={"/leagues"}
                  className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FaUsers className="mr-1" /> Leagues
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FaTrophy className="mr-1" /> Rankings
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <button
                  onClick={toggleNotifications}
                  className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none relative"
                >
                  <FaBell className="h-6 w-6" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {notificationsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="px-4 py-2 border-b border-gray-700 text-white font-semibold">
                      Notifications
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <a
                          key={notification.id}
                          href="#"
                          className={`block px-4 py-3 text-sm ${
                            notification.read
                              ? "text-gray-400"
                              : "text-white bg-gray-700"
                          } hover:bg-gray-700`}
                        >
                          <div>{notification.text}</div>
                          <div className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </div>
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-center text-yellow-400 hover:bg-gray-700 border-t border-gray-700"
                    >
                      View all notifications
                    </a>
                  </div>
                )}
              </div>

              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleUserMenu}
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none"
                    id="user-menu"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png"
                      alt="User profile"
                    />
                    <span className="ml-2 text-white hidden lg:inline">
                      Niraj
                    </span>
                  </button>
                </div>

                {userMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-30 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 flex justify-center flex-col">
                    <button
                      onClick={toggleUserMenu}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                    >
                      <FaUser className="mr-2" />
                      <Link to={"/#"}>Profile</Link>
                    </button>
                    <button
                      onClick={toggleUserMenu}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                    >
                      <FaCog className="mr-2" /> Settings
                    </button>
                    <button
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                    >
                      <FaSignOutAlt className="mr-2" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to={"/"}
              onClick={toggleMenu}
              className="text-yellow-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <FaHome className="mr-2" /> Home
            </Link>
            <Link
              to={"/myteam"}
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <FaChartLine className="mr-2" /> My Team
            </Link>
            <Link
              to={"/leagues"}
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <FaUsers className="mr-2" /> Leagues
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <FaTrophy className="mr-2" /> Rankings
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png"
                  alt="User profile"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Niraj</div>
                <div className="text-sm font-medium text-gray-400">
                  niraj@.com
                </div>
              </div>
              <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none relative">
                <FaBell className="h-6 w-6" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <button
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <Link to={"/#"}>Profile</Link>
              </button>
              <button
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Settings
              </button>
              <button
                onClick={logout}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
