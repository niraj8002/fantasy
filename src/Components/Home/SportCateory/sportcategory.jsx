
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
    // ... rest of the player data
  ];

  return (
    <div className="min-h-screen bg-gray-800 p-4"> {/* Changed to bg-gray-800 */}
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
              <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 w-1/3">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    player.rank === 1
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black"
                      : player.rank === 2
                      ? "bg-gradient-to-br from-gray-300 to-gray-400 text-black"
                      : player.rank === 3
                      ? "bg-gradient-to-br from-amber-600 to-amber-800 text-white"
                      : "bg-gray-600 text-white"
                  }`}
                >
                  {player.rank}
                </div>
                <div className="text-3xl">{player.avatar}</div>
                <div>
                  <h3 className="font-semibold text-white">
                    {player.username}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {player.matches} matches
                  </p>
                </div>
              </div>

              <div className="hidden md:block w-1/4 px-4">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      player.rank <= 3 ? "bg-yellow-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${player.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Win rate: {player.progress}%
                </p>
              </div>

              <div className="text-right w-1/3">
                <p className="text-xl font-bold text-white">
                  {player.winnings}
                </p>
                <p className="text-sm text-gray-400">Total earnings</p>
              </div>
            </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-xl shadow-lg transition-all transform hover:scale-105">
            View Complete Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopWinners;