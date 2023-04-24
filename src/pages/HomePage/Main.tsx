import React from "react";
import "@/styles/Main.css";
const Main = () => {
  return (
    <div className="main border-white border-b-2">
      <div className="wrapper flex flex-col m-10">
        <div className="flex flex-row border-b border-white py-10 flex-wrap justify-between items-center">
          <div className=" text-6xl w-1/2 flex flex-col">
            <h1 className="">Listen to your favourite music</h1>
            <span className="font-bold">anytime, <span className="text-yellow-400">anywhere</span></span>
          </div>
          <p className="text-l w-64 pt-10 lg:pt-0">
            Listen to over 80 million songs, exclusive releases and music in
            Hi-Fi sound formate
          </p>
        </div>

        <div className="background w-full h-96 my-10"></div>
        <div className="sponsors flex flex-col sm:flex-row items-center justify-between mx-36 my-10 gap-5">
          <div className="w-16">
            <img
              src="src/assets/logos/spotify.png"
              alt="spotify-logo"
              className=""
            />
          </div>
          <div className="w-24">
            <img
              src="src/assets/logos/netflix.png"
              alt="netflix-logo"
              className=""
            />
          </div>
          <div className="w-24">
            <img
              src="src/assets/logos/verizon.png"
              alt="verizon-logo"
              className=""
            />
          </div>
          <div className="w-24">
            <img
              src="src/assets/logos/google.png"
              alt="google-logo"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
