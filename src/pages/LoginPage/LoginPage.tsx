import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { current } from "@reduxjs/toolkit";
import {motion} from 'framer-motion'

export enum LoginTypeEnum {
  login = "login",
  signup = "signup",
}
const renderSwitch = (param :any) => {
    switch (param) {
        case LoginTypeEnum.login:
            return <Login />;
        case LoginTypeEnum.signup:
            return <Signup />;
        default:
            return <Login />;
    }
}

export type LoginType = {
  active: LoginTypeEnum;
};

export const LoginPage = ({active}: LoginType) => {
    const [activeTab, setActiveTab] = React.useState(active);
  return <motion.div className="flex flex-col md:grid md:grid-cols-3 justify-center min-h-screen overflow-hidden"

  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  transition={{
    duration: 0.8,
    ease: [0, 0.71, 0.2, 1.01]
  }}

  >
        {renderSwitch(active)}

        <motion.div className="col-span-2 bg-gradient-to-r 
bbg-gradient-to-b from-yellow-300 to-orange-500
animate-gradient-x hidden md:flex w-full"
    

>
            <div className="flex flex-col items-center justify-center h-full w-full">
                <h1 className="text-6xl font-bold text-white drop-shadow-2xl">TuneMate</h1>
                <p className="mt-4 text-2xl font-light text-center text-white">
                    A music app for everyone
                </p>
            </div>
        </motion.div>
  </motion.div>;
};
