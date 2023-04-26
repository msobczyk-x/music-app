import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuthentication from "@/hooks/useAuthentication";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";
import PlayerBar from "@/components/player/PlayerBar";
import Navbar from "@/components/player/Navbar";
import Sidebar from "@/components/player/Sidebar";
const PlayerDashboard = () => {
  const user = useSelector((state: any) => state.UserSlice.user);
  const [spotifyApiKey, setSpotifyApiKey] = React.useState(
    localStorage.getItem("token")
  );
  const { signOutCall } = useAuthentication();
  const signOut = async () => {
    await signOutCall();
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!spotifyApiKey) {
      navigate("/setup-api-key");
    }
  });

  return (
    <div className="flex h-screen w-full dark flex-col">
      <Navbar />
      <div className="grid grid-cols-5 h-full w-full">
        <Sidebar />
        <div className="col-span-4"></div>
       
      </div>
      <PlayerBar />
    </div>
  );
};

export default PlayerDashboard;
