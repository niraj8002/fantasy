import React from "react";

const TopWinners = () => {
  const winners = [
    {
      id: 1,
      rank: 1,
      avatar: "👑",
      username: "ChampionPlayer",
      winnings: "₹1,25,000",
      matches: 42,
      progress: 95,
    },
    {
      id: 2,
      rank: 2,
      avatar: "⚽",
      username: "GoalMaster",
      winnings: "₹98,500",
      matches: 38,
      progress: 88,
    },
    {
      id: 3,
      rank: 3,
      avatar: "🥇",
      username: "GoldenBoot",
      winnings: "₹87,200",
      matches: 35,
      progress: 82,
    },
    {
      id: 4,
      rank: 4,
      avatar: "🦁",
      username: "LionelFantasy",
      winnings: "₹76,800",
      matches: 40,
      progress: 78,
    },
    {
      id: 5,
      rank: 5,
      avatar: "🔵",
      username: "BlueWhale",
      winnings: "₹65,300",
      matches: 32,
      progress: 72,
    },
    {
      id: 6,
      rank: 6,
      avatar: "🌟",
      username: "RisingStar",
      winnings: "₹54,700",
      matches: 28,
      progress: 65,
    },
    {
      id: 7,
      rank: 7,
      avatar: "⚡",
      username: "FastFurious",
      winnings: "₹48,900",
      matches: 30,
      progress: 60,
    },
    {
      id: 8,
      rank: 8,
      avatar: "🦸",
      username: "FantasyHero",
      winnings: "₹42,500",
      matches: 27,
      progress: 55,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 max-w-[90vw] mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">🏆 Top Winners</h2>
        <p className="text-gray-300">
          Fantasy Football Leaderboard - Season 2023
        </p>
      </div>


      <div className="space-y-4">
        {winners.map((player) => (
          <div
            key={player.id}
            className={`bg-gradient-to-r ${
              player.rank <= 3
                ? "from-yellow-500/10 to-yellow-500/5"
                : "from-gray-800 to-gray-700/50"
            } p-4 rounded-xl border ${
              player.rank <= 3 ? "border-yellow-500/30" : "border-gray-600"
            } shadow-sm hover:shadow-md transition-all`}
          >
           
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-xl shadow-lg transition-all transform hover:scale-105">
          View Complete Leaderboard
        </button>
      </div>
    </div>
  );
};

export default TopWinners;