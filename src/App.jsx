import React from "react";
import { useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import MyTeam from "./Components/NavComponets/MyTeam/Myteam";
import { LeaguesPage } from "./Components/NavComponets/Leagues/Leagues";
import HomeMain from "./Components/Home/HomeMain/homeMain";
import { FantasyNavbar } from "./Components/Home/Navbar/navbar";
import LoginPage from "./Components/Log & sign/log-in/login";
import { context } from "./context/context";
import { ProtectedRoute } from "./Private-Route/private";
import SignupPage from "./Components/Log & sign/sign-in/sign-in";
import FantasyUserProfile from "./Components/userAccount/userAccount";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-6 py-2 bg-red-400 text-gray-800 rounded-md hover:bg-red-600 transition-colors"
      >
        Go to Home
      </button>
    </div>
  );
};

function App() {
  const { isAuthen } = useContext(context);
  console.log(isAuthen);

  const location = useLocation();
  const hideComponents = ["/login", "/sign-in"];
  const showComponents = !hideComponents.includes(location.pathname);
  return (
    <>
      {isAuthen ? <FantasyNavbar /> : null}
      <Routes>
        <Route path="/leagues" element={<LeaguesPage />} />
        <Route
          path="/login"
          element={!isAuthen ? <LoginPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signin"
          element={!isAuthen ? <SignupPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/useraccount"
          element={
            <ProtectedRoute>
              <FantasyUserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeMain />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myteam"
          element={
            <ProtectedRoute>
              <MyTeam />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leagues"
          element={
            <ProtectedRoute>
              <LeaguesPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
