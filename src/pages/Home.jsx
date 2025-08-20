import React from "react";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4">
      Lubrex India
    </h1>
    <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-xl">
      We’re excited to announce that{" "}
      <span className="font-semibold text-yellow-400">Lubrex</span> is coming
      soon to India.
    </p>
    <div className="bg-yellow-400 text-black px-8 py-3 rounded-2xl shadow-lg font-semibold text-lg">
      Stay tuned for the launch!
    </div>
  </div>
);

export default Home;
