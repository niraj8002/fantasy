import React from "react";
import { HeroSection } from "./Componets/Home/HeroSection/heroSection";
import { FantasyNavbar } from "./Componets/Home/Navbar/navbar";
import { MyteamSection } from "./Componets/NavComponets/MyTeam/Myteam";
import { Routes, Route, useLocation } from "react-router-dom";
import { LeaguesPage } from "./Componets/NavComponets/Leagues/Leagues";

function App() {
  const location = useLocation();















  return (
    <>
      <FantasyNavbar />
      <Routes>
        <Route path="/myteam" element={<MyteamSection />} />
        <Route path="/leagues" element={<LeaguesPage />} />
      </Routes>
      {location.pathname === "/" && <HeroSection />}
    </>

    
  );
}

export default App;
