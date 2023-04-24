import React from "react";
import { useSelector } from "react-redux";
import {Navigate}  from "react-router-dom";

const AuthGuard = ({ children }: any) => {
    const user = useSelector (({UserSlice} :any) => UserSlice.user);
    if (!user.email) {
        return <Navigate to="/" />;
    }
    return <div>{children}</div>;
    };

export default AuthGuard;