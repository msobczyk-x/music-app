import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { current } from "@reduxjs/toolkit";

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
  return <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        {renderSwitch(active)}
  </div>;
};
