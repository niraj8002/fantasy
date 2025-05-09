import React from "react";
import { FaFutbol, FaUsers, FaTrophy, FaChartLine } from "react-icons/fa";
import { GiSoccerKick } from "react-icons/gi";

const HowItWork = ({ p, ref }) => {
  const steps = [
    {
      icon: <FaFutbol className="text-4xl text-yellow-400" />,
      title: "Select a Match",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis libero tarig fuilt saut!",
      navigate: "👉 Pick your game",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-400" />,
      title: "Create Your Team",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis libero tarig fuilt saut!",
      navigate: "⛹️ 11 players within budget",
    },
    {
      icon: <GiSoccerKick className="text-4xl text-yellow-400" />,
      title: "Join Contests",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis libero tarig fuilt saut!",
      navigate: "🏆 Public/Private leagues",
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-400" />,
      title: "Win Prizes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quis libero tarig fuilt saut!",
      navigate: "💰 Real money rewards",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How To <span className="text-yellow-400">Play</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join millions of fantasy managers in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-gray-900 font-bold flex items-center justify-center mb-4">
                  {index + 1}
                </div>

                <div className="mb-4">{step.icon}</div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>

                <div className="mt-auto bg-gray-700/30 rounded-lg px-3 py-2 text-sm text-gray-300 border border-gray-600">
                  {step.navigate}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
            <FaChartLine className="mr-2" /> Start Playing Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default HowItWork;
