import React from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";


const SetupApi = () => {
  const CLIENT_ID = "4abcd7b187ea4746b066e52ab0ec4c00";
  const REDIRECT_URI = "http://localhost:5173/setup-api-key";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const navigate = useNavigate();
  const [token, setToken] = useState<any>("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1] || "";
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);

    if (token) {
      navigate("/player");
    }
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (



  <motion.div className="flex w-full h-screen bg-gradient-to-r 
  bbg-gradient-to-b from-yellow-300 to-orange-500
  animate-gradient-x items-center justify-center"

    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01]
    }}
  
    >
          
  
          <motion.div className="w-1/2 h-1/2 bg-gray-600 rounded-2xl shadow-2xl flex flex-col items-center justify-center
  
          "
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }} 
  
  >
              <div className="flex flex-col items-center justify-between h-full w-full p-10">
                  <h1 className="text-6xl font-bold text-white drop-shadow-2xl">TuneMate</h1>
                  <p className="mt-4 text-2xl font-light text-center text-white">
                      Connect with Spotify to get started
                  </p>
                  {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read`}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 text-center"
          >
            <p className="text-white text-xl font-bold">
            Login to Spotify
            </p>
            
          </a>
        ) : (
          <button onClick={logout} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 text-center">Logout</button>
        )}
              </div>
          </motion.div>
    </motion.div>

  );
};

export default SetupApi;
