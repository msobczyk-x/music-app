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


import { Buffer } from 'buffer'
const PlayerDashboard = () => {


  const [player, setPlayer] = React.useState<Spotify.Player | undefined>(undefined);
  const user = useSelector((state: any) => state.UserSlice.user);
  const [token,setToken] = React.useState(localStorage.getItem("token"));

  const { signOutCall } = useAuthentication();
  const signOut = async () => {
    await signOutCall();
  };

  const navigate = useNavigate();

  useEffect(() => {

    if(token){

    
 /*    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script); */

    window.onSpotifyWebPlaybackSDKReady = () => {

        const player = new window.Spotify.Player({
            name: 'Tunemate Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        setPlayer(player);

        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            localStorage.setItem("device_id", device_id);
        });

        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.connect();

    };
  }
    return () => {
      player?.disconnect();
    };
}, []);

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
        <PlayerBar token={token} player={player} />
      </div>

    </div>
  );
};

export default PlayerDashboard;
