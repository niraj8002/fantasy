import React, { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaTrophy,
  FaMoneyBillWave,
  FaUserShield,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("general");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = {
    general: [
      {
        question: "How do I create an account?",
        answer:
          "Simply click on the 'Sign Up' button, provide your email address, create a password, and verify your account through the confirmation email we send you.",
      },
      {
        question: "Is there an age restriction to play?",
        answer:
          "Yes, you must be at least 18 years old to participate in real money contests on our platform.",
      },
      {
        question: "How do I deposit money into my account?",
        answer:
          "We accept various payment methods including credit/debit cards, e-wallets, and bank transfers. Go to the 'Deposit' section in your account to add funds.",
      },
    ],
    rewards: [
      {
        question: "How do I claim my winnings?",
        answer:
          "Winnings are automatically credited to your account balance. You can withdraw them anytime by going to the 'Withdraw' section after verifying your account.",
      },
      {
        question: "What are referral bonuses and how do they work?",
        answer:
          "When you refer a friend who signs up and makes their first deposit, you'll receive a bonus equal to 10% of their initial deposit amount.",
      },
      {
        question: "How often are daily rewards available?",
        answer:
          "Daily login rewards refresh every 24 hours. The rewards get progressively better if you maintain a streak of consecutive logins.",
      },
    ],
    contests: [
      {
        question: "What types of contests are available?",
        answer:
          "We offer various contest formats including head-to-head matches, 50-50s (top half wins), multi-player tournaments, and private leagues.",
      },
      {
        question: "How are winners determined?",
        answer:
          "Winners are determined based on your team's performance according to our scoring system. The top scoring teams in each contest win the designated prizes.",
      },
      {
        question: "Can I join multiple contests with the same team?",
        answer:
          "Yes, you can enter the same team in multiple contests simultaneously, as long as the contests are for the same sport and match period.",
      },
    ],
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gray-800">
        <section className="bg-gradient-to-r from-gray-800 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaQuestionCircle className="w-12 h-12 text-yellow-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-aos="zoom-in-down">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-aos="fade-left">
              Find answers to common questions about our fantasy sports
              platform, rewards, and how to play.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveCategory("general")}
                className={`px-6 py-3 rounded-full font-medium flex items-center ${
                  activeCategory === "general"
                    ? "bg-yellow-500 text-gray-800"
                    : "bg-white text-gray-800 border border-gray-300"
                }`}
              >
                <FaQuestionCircle className="mr-2" />
                General Questions
              </button>
              <button
                onClick={() => setActiveCategory("rewards")}
                className={`px-6 py-3 rounded-full font-medium flex items-center ${
                  activeCategory === "rewards"
                    ? "bg-yellow-500 text-gray-800"
                    : "bg-white text-gray-800 border border-gray-300"
                }`}
              >
                <FaTrophy className="mr-2" />
                Rewards & Prizes
              </button>
              <button
                onClick={() => setActiveCategory("contests")}
                className={`px-6 py-3 rounded-full font-medium flex items-center ${
                  activeCategory === "contests"
                    ? "bg-yellow-500 text-gray-800"
                    : "bg-white text-gray-800 border border-gray-300"
                }`}
              >
                <FaMoneyBillWave className="mr-2" />
                Contests
              </button>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-gray-200 capitalize">
                {activeCategory === "general" && "General Questions"}
                {activeCategory === "rewards" && "Rewards & Prizes"}
                {activeCategory === "contests" && "Contests"}
              </h2>

              <div className="space-y-4">
                {faqCategories[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-xl shadow-md overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {item.question}
                      </span>
                      {activeIndex === index ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </button>
                    {activeIndex === index && (
                      <div className="px-6 pb-6 pt-0 text-gray-600">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-yellow-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <FaUserShield className="w-10 h-10 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Still need help?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our support team is available 24/7 to assist you with any
                  questions or issues.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-green-600 hover:bg-green-800  text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Contact Support
                  </button>
                  <button className="bg-green-300 hover:bg-green-500 hover:ring-1 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
