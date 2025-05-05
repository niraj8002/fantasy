import React from "react";
import { FaPlay, FaTrophy, FaUsers, FaChartLine } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Dominate Your
              <span className="text-yellow-400">Fantasy League</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join millions of managers worldwide in the ultimate fantasy
              football experience. Build your dream team, compete with friends,
              and climb to the top of the rankings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center">
                <FaPlay className="mr-2" /> Join Now - It's Free!
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-6 border border-gray-600 rounded-lg transition duration-300 flex items-center justify-center">
                How It Works
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <FaTrophy className="text-yellow-400 text-2xl mr-2" />
                <div>
                  <div className="font-bold text-lg">10M+</div>
                  <div className="text-gray-400 text-sm">Active Players</div>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-yellow-400 text-2xl mr-2" />
                <div>
                  <div className="font-bold text-lg">$5M+</div>
                  <div className="text-gray-400 text-sm">In Prizes</div>
                </div>
              </div>
              <div className="flex items-center">
                <FaChartLine className="text-yellow-400 text-2xl mr-2" />
                <div>
                  <div className="font-bold text-lg">#1</div>
                  <div className="text-gray-400 text-sm">Fantasy Platform</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400">
                      Featured Player
                    </h3>
                    <p className="text-gray-400">This week's top pick</p>
                  </div>
                  <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                    HOT
                  </span>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400 mr-4">
                    <img
                      src="https://resources.premierleague.com/premierleague/photos/players/250x250/p165153.png"
                      alt="Player"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Mohamed Salah</h4>
                    <p className="text-gray-400">Liverpool | Forward</p>
                    <div className="flex mt-1">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-2">
                        +12.5%
                      </span>
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        78% Selected
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                    <div className="text-gray-400 text-sm">Points</div>
                    <div className="text-xl font-bold text-yellow-400">187</div>
                  </div>
                  <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                    <div className="text-gray-400 text-sm">Goals</div>
                    <div className="text-xl font-bold">22</div>
                  </div>
                  <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                    <div className="text-gray-400 text-sm">Assists</div>
                    <div className="text-xl font-bold">13</div>
                  </div>
                </div>

                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition duration-300 flex items-center justify-center">
                  Add to My Team
                </button>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400/10 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/10 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};
