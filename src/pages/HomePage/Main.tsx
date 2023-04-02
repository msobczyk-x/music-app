import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main border-white border-b-2">
      <div className="wrapper flex flex-col   m-10">
        <div className="flex flex-row border-b border-white p-10">
          <h1 className="text-8xl w-2/3">
            Listen to your favourite music{" "}
            <span className="font-bold">anytime,anywhere</span>
          </h1>
          <p className="text-l mt-10">
            Listen to over 80 million songs, exclusive releases and music in
            Hi-Fi sound formate
          </p>
        </div>

        <div className="background w-full h-96 my-10"></div>
        <div className="sponsors flex flex-row h-12 justify-between mx-36 my-10">
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            alt="spotify"
            className=""
          />
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            alt="spotify"
            className=""
          />
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            alt="spotify"
            className=""
          />
          <img
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
            alt="spotify"
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
