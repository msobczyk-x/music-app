import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuthentication from "@/hooks/useAuthentication";
import { getAuth } from "firebase/auth";
import { useNavigate, Routes } from "react-router-dom";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";
import PlayerBar from "@/components/player/PlayerBar";
import Navbar from "@/components/player/Navbar";
import Sidebar from "@/components/player/Sidebar/Sidebar";
import MainDashboard from "@/components/player/MainDashboard/MainDashboard";
import SpotifyPlayer from "react-spotify-web-playback";

import { Buffer } from 'buffer'
const PlayerDashboard = () => {
const [token, setToken] = React.useState(localStorage.getItem("token"));
  const CLIENT_ID = "4abcd7b187ea4746b066e52ab0ec4c00"
  const REDIRECT_URI = "http://localhost:5173/setup-api-key"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const CLIENT_SECRET = "0f8aee8302154da99c35440c326d4982"

  const user = useSelector((state: any) => state.UserSlice.user);


  const { signOutCall } = useAuthentication();
  const signOut = async () => {
    await signOutCall();
  };

  const navigate = useNavigate();

  useEffect(() => {

    if (!token) {
      navigate('/setup-api-key')
    }
  });

  return (
    <div className="flex h-screen w-full dark flex-col">
      <Navbar />
      <div className="grid grid-cols-5 h-full w-full">
        <Sidebar />
        <div className="col-span-4">
          <h1>{token}</h1>
          <MainDashboard />
        </div>
        <PlayerBar token={token} />
      </div>

    </div>
  );
};

export default PlayerDashboard;
