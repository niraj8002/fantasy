import React, { useEffect } from "react";
import { FaRegClock, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

const ContestsSection = () => {
  const contests = [
    {
      id: 1,
      status: "Live",
      matchTime: "Today, 3:00 PM",
      teams: {
        home: {
          name: "Liverpool",
          logo: "https://resources.premierleague.com/premierleague/badges/25/t14.png",
        },
        away: {
          name: "Man City",
          logo: "https://resources.premierleague.com/premierleague/badges/25/t43.png",
        },
      },
      entryFee: "Free",
      prizePool: "$1,000",
      spots: { filled: 8723, total: 10000 },
      contestType: "Mega Contest",
      aos: "zoom-in-down",
    },
    {
      id: 2,
      status: "Upcoming",
      matchTime: "Tomorrow, 2:30 PM",
      teams: {
        home: {
          name: "Arsenal",
          logo: "https://resources.premierleague.com/premierleague/badges/25/t3.png",
        },
        away: {
          name: "Chelsea",
          logo: "https://resources.premierleague.com/premierleague/badges/25/t8.png",
        },
      },
      entryFee: "$5",
      prizePool: "$50,000",
      spots: { filled: 4231, total: 5000 },
      contestType: "Head-to-Head",
      aos: "zoom-in-down",
    },
    {
      id: 3,
      status: "Upcoming",
      matchTime: "Tomorrow, 5:00 PM",
      teams: {
        home: {
          name: "Man United",
          logo: "https://resources.premierleague.com/premierleague/badges/25/t1.png",
        },
        away: {
          name: "Tottenham",
          logo: "https://resources.premierleague.com/premierleague/badges/25/t6.png",
        },
      },
      entryFee: "$10",
      prizePool: "$25,000",
      spots: { filled: 892, total: 2000 },
      contestType: "Winner Takes All",
      aos: "zoom-in-down",
    },
    {
      id: 4,
      status: "Live",
      matchTime: "Today, 8:45 PM",
      teams: {
        home: {
          name: "Barcelona",
          logo: "https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png",
        },
        away: {
          name: "Real Madrid",
          logo: "https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_48x48.png",
        },
      },
      entryFee: "$2",
      prizePool: "$10,000",
      spots: { filled: 6543, total: 8000 },
      contestType: "50-50",
      aos: "zoom-in-down",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  },[]);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="500"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-yellow-400">Live</span> & Upcoming Contests
            </h2>
            <p className="text-gray-300">
              Join contests for upcoming matches and win big!
            </p>
          </div>
          <button className="mt-4 md:mt-0 flex items-center text-yellow-400 hover:text-yellow-300">
            View All Contests <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contests.map((contest) => (
            <div
              key={contest.id}
              className={`bg-gray-800 rounded-xl overflow-hidden border  ${
                contest.status === "Live"
                  ? "border-green-500"
                  : "border-gray-700"
              } hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              data-aos={contest.aos}
            >
              <div
                className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold ${
                  contest.status === "Live" ? "bg-green-600" : "bg-yellow-500"
                } text-white`}
              >
                {contest.status}
              </div>

              <div className="p-5">
                <div className="flex items-center text-gray-400 mb-4">
                  <FaRegClock className="mr-2" />
                  <span>{contest.matchTime}</span>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={contest.teams.home.logo}
                      alt={contest.teams.home.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium">
                      {contest.teams.home.name}
                    </span>
                  </div>
                  <div className="text-xl font-bold mx-2">vs</div>
                  <div className="flex flex-col items-center">
                    <img
                      src={contest.teams.away.logo}
                      alt={contest.teams.away.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm font-medium">
                      {contest.teams.away.name}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-700/50 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  {contest.contestType}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-700/30 p-3 rounded-lg">
                    <div className="text-gray-400 text-sm">Entry Fee</div>
                    <div
                      className={`text-lg font-bold ${
                        contest.entryFee === "Free"
                          ? "text-green-400"
                          : "text-white"
                      }`}
                    >
                      {contest.entryFee}
                    </div>
                  </div>
                  <div className="bg-gray-700/30 p-3 rounded-lg">
                    <div className="text-gray-400 text-sm">Prize Pool</div>
                    <div className="text-lg font-bold text-yellow-400">
                      {contest.prizePool}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Spots filled</span>
                    <span>
                      {contest.spots.filled}/{contest.spots.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (contest.spots.filled / contest.spots.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition duration-300 flex items-center justify-center ${
                    contest.status === "Live"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                  }`}
                >
                  {contest.status === "Live" ? "Join Now" : "Enter Contest"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContestsSection;
