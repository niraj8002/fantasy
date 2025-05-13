import React, { useRef } from "react";
import HeroSection from "../HeroSection/heroSection";
import HowItWork from "../HowToPlay/howtoplay";
import ContestsSection from "../ContestsSection/ContestsSection";
import Tournaments from "../Tournament/tournament";
import RewardsBenefits from "../RewardAndBenifit/rewardAndBenifit";
import FAQPage from "../FAQpage/faq";
const Homemain = () => {
  const teamRef = useRef(null);
  const contestRef = useRef(null);
  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContest = () => {
    contestRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        onScrollToTeam={scrollToTeam}
        onScrollToContest={scrollToContest}
      />
      <HowItWork ref={teamRef} />
      <ContestsSection ref={contestRef} />
      <Tournaments />
      <RewardsBenefits />
      <FAQPage />
    </div>
  );
};

export default Homemain;
