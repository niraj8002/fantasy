import React from "react";

export const LeaguesPage = () => {
  return (
    <section
      className="min-h-screen px-4 py-8 bg-[url('../../../../public/banner1.png')] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../')",
      }}
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Tennis Experience
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          with Tennis League Management Platform
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Create and join custom Tennis Leagues Easily
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-green-600 transition">
            + Create Tennis League
          </button>
          <button className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-xl text-base font-medium hover:bg-green-50 transition">
            Join with Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeaguesPage;
