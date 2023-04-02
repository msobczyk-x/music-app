import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main border-white border-b-2">
      <div className="wrapper flex flex-col m-10">
        <div className="flex flex-row border-b border-white p-10 flex-wrap justify-between items-center">
          <h1 className="text-7xl w-1/2 flex flex-wrap">
            Listen to your favourite music
            <span className="font-bold">anytime,anywhere</span> 
          </h1>
          <p className="text-l w-64 pt-10 lg:pt-0">
            Listen to over 80 million songs, exclusive releases and music in
            Hi-Fi sound formate
          </p>
        </div>

        <div className="background w-full h-96 my-10"></div>
        <div className="sponsors flex flex-col md:flex-row h-12 justify-between mx-36 my-10 gap-5">
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
