import React, { useEffect, useState } from "react";
import {
  FaTrophy,
  FaCalendarAlt,
  FaUsers,
  FaRupeeSign,
  FaFilter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import fc from "../../../assets/fc.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [activeCity, setActiveCity] = useState("all");

  const tournaments = [
    {
      id: 1,
      title: "Mumbai Tennis Open",
      game: "Tennis",
      prize: "₹5,00,000",
      participants: 1250,
      date: "15-30 Oct 2023",
      status: "upcoming",
      city: "Mumbai",
      image: fc,
      aos:"zoom-in-down"
    },
    {
      id: 2,
      title: "Delhi Grand Slam",
      game: "Tennis",
      prize: "₹3,50,000",
      participants: 892,
      date: "1-14 Jul 2023",
      status: "ongoing",
      city: "Delhi",
      image: fc,
      aos:"zoom-in-down"
    },
    {
      id: 3,
      title: "Bangalore Championship",
      game: "Tennis",
      prize: "₹2,75,000",
      participants: 754,
      date: "28 May-11 Jun 2023",
      status: "completed",
      city: "Bangalore",
      image: fc,
      aos:"zoom-in-down"
    },
    {
      id: 4,
      title: "Hyderabad Masters",
      game: "Tennis",
      prize: "₹4,25,000",
      participants: 1103,
      date: "29 Aug-11 Sep 2023",
      status: "upcoming",
      city: "Hyderabad",
      image: fc,
      aos:"zoom-in-down"
    },
    {
      id: 5,
      title: "Chennai Classic",
      game: "Tennis",
      prize: "₹3,00,000",
      participants: 687,
      date: "16-29 Jan 2023",
      status: "completed",
      city: "Chennai",
      image: fc,
      aos:"zoom-in-down"
    },
    {
      id: 6,
      title: "Kolkata Challenge",
      game: "Tennis",
      prize: "₹2,50,000",
      participants: 543,
      date: "6-13 Nov 2023",
      status: "upcoming",
      city: "Kolkata",
      image: fc,
      aos:"zoom-in-down"
    },
  ];

  const cities = ["all", ...new Set(tournaments.map((t) => t.city))];

  const filteredTournaments = tournaments.filter((t) => {
    const statusMatch = activeTab === "all" || t.status === activeTab;
    const cityMatch = activeCity === "all" || t.city === activeCity;
    return statusMatch && cityMatch;
  });
  useEffect(()=>{
    AOS.init({
      duration:500,
      once:false,
    })
  })

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-3" data-aos="fade-right">
            Tournaments Organized by
            <span className="text-yellow-500">FantacyFC</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"  data-aos="fade-left">
            Compete in exciting fantasy tennis tournaments across India
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full flex items-center font-semibold ${
                activeTab === "all"
                  ? "bg-yellow-600 text-gray-800"
                  : "bg-gray-200 text-gray-700 border border-gray-300"
              }`}
            >
              <FaFilter className="mr-2" /> All Tournaments
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded-full flex items-center font-medium ${
                activeTab === "upcoming"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 border border-gray-300"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("ongoing")}
              className={`px-4 py-2 rounded-full flex items-center font-medium ${
                activeTab === "ongoing"
                  ? "bg-yellow-500 text-gray-800"
                  : "bg-gray-200 text-gray-700 border border-gray-300"
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-4 py-2 rounded-full flex items-center font-medium ${
                activeTab === "completed"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-200 text-gray-700 border border-gray-300"
              }`}
            >
              Completed
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-4 py-2 rounded-full flex items-center font-medium ${
                  activeCity === city
                    ? "bg-gray-500/20 text-white"
                    : "bg-gray-200 text-gray-700 border border-gray-300"
                }`}
              >
                {city === "all" ? (
                  <>
                    <FaMapMarkerAlt className="mr-2" /> All Cities
                  </>
                ) : (
                  <>
                    <FaMapMarkerAlt className="mr-2 text-red-500 " /> {city}
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {filteredTournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                data-aos={tournament.aos}
              >
                <div className="h-40 bg-gray-200 relative">
                  <img
                    src={tournament.image}
                    alt={tournament.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-3 py-1 text-sm rounded-r-sm">
                    <FaMapMarkerAlt className="inline mr-1" /> {tournament.city}
                  </div>
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${
                      tournament.status === "upcoming"
                        ? "bg-green-100 text-green-800"
                        : tournament.status === "ongoing"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {tournament.status.charAt(0).toUpperCase() +
                      tournament.status.slice(1)}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-200 mb-2">
                    {tournament.title}
                  </h3>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-gray-600">
                      <FaTrophy className="mr-2 text-yellow-500" />
                      <span className="font-medium">{tournament.game}</span>
                    </div>
                    <div className="text-sm bg-yellow-600 px-2 py-1 rounded">
                      {tournament.city}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center">
                      <FaRupeeSign className="mr-2 text-green-600" />
                      <div>
                        <p className="text-sm text-gray-500">Prize Pool</p>
                        <p className="font-bold text-gray-400">
                          {tournament.prize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="mr-2 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-500">Participants</p>
                        <p className="font-bold  text-gray-400">
                          {tournament.participants.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                    <FaCalendarAlt className="mr-2 text-red-500" />
                    <span className="text-gray-400">{tournament.date}</span>
                  </div>

                  <button
                    className={`mt-4 w-full py-2 rounded-lg font-medium ${
                      tournament.status === "upcoming"
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                        : tournament.status === "ongoing"
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-200 text-gray-700"
                    } transition-colors`}
                  >
                    {tournament.status === "upcoming"
                      ? "Register Now"
                      : tournament.status === "ongoing"
                      ? "Join Tournament"
                      : "View Results"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium text-gray-700">
              No tournaments found
            </h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters</p>
          </div>
        )}

        {filteredTournaments.length > 6 && (
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Load More Tournaments
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tournaments;
