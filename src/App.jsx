import React from "react";
import { FantasyNavbar } from "./Componets/Home/Navbar/navbar";
import { MyteamSection } from "./Componets/NavComponets/MyTeam/Myteam";
import { Routes, Route, useLocation } from "react-router-dom";
import { LeaguesPage } from "./Componets/NavComponets/Leagues/Leagues";

function App() {
  const location = useLocation();
  const hideComponents = ["/login", "/sign-in"];
  const showComponents = !hideComponents.includes(location.pathname);
  return (
    <>
      <ProtectedRoute>{showComponents && <FantasyNavbar />}</ProtectedRoute>
      <Routes>
        <Route path="/leagues" element={<LeaguesPage />} />
      </Routes>
    </>
  );
}

export default App;
