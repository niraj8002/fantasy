import React, { useEffect } from "react";
import {
  FaTrophy,
  FaMoneyBillWave,
  FaUserFriends,
  FaCalendarAlt,
  FaGift,
  FaCoins,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const RewardsBenefits = () => {
  const benefits = [
    {
      icon: <FaTrophy className="w-12 h-12 text-yellow-500" />,
      title: "Real Cash Prizes",
      description:
        "Win real money by topping leaderboards in daily, weekly, and seasonal contests.",
      aos: "zoom-in-down",
    },
    {
      icon: <FaMoneyBillWave className="w-12 h-12 text-green-500" />,
      title: "Referral Bonuses",
      description:
        "Earn bonus cash for every friend you refer who joins and plays on our platform.",
      aos: "zoom-in-down",
    },
    {
      icon: <FaCalendarAlt className="w-12 h-12 text-blue-500" />,
      title: "Daily Rewards",
      description:
        "Log in daily to claim free bonuses and increase your winning potential.",
      aos: "zoom-in-down",
    },
    {
      icon: <FaUserFriends className="w-12 h-12 text-purple-500" />,
      title: "League Rewards",
      description:
        "Create or join private leagues with friends for exclusive prizes and bragging rights.",
      aos: "zoom-in-down",
    },
    {
      icon: <FaGift className="w-12 h-12 text-red-500" />,
      title: "Seasonal Promotions",
      description:
        "Special limited-time offers and bonus contests during major sporting events.",
      aos: "zoom-in-down",
    },
    {
      icon: <FaCoins className="w-12 h-12 text-amber-600" />,
      title: "Loyalty Points",
      description:
        "Earn points for every contest you enter, redeemable for bonus cash and exclusive perks.",
      aos: "zoom-in-down",
    },
  ];
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            data-aos="fade-right"
          >
            Rewards & <span className="text-yellow-400">Benefits</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-left"
          >
            Join thousands of players competing for amazing prizes every day.
            Here's what you can win:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos={benefit.aos}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-700 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Join Now & Start Winning
          </button>
          <p className="mt-4 text-gray-400">
            No hidden fees • Instant withdrawals • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default RewardsBenefits;
