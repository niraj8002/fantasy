import React, { useRef } from "react";
import HeroSection from "../HeroSection/heroSection";
import HowItWork from "../HowToPlay/howtoplay";
import ContestsSection from "../ContestsSection/ContestsSection";
import TopWinners from "../SportCateory/sportcategory";
const Homemain = () => {
  const teamRef = useRef(null);
  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HeroSection onScrollToTeam={scrollToTeam} />
      <HowItWork ref={teamRef} />
      <ContestsSection />
      <TopWinners/>
    </>
  );
};

export default Homemain;




