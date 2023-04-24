import React from "react";
import { useSelector } from "react-redux";
import {Navigate}  from "react-router-dom";

const GuestGuard = ({ children }: any) => {
    const user = useSelector (({UserSlice} :any) => UserSlice.user);
    if (user?.email) {
        return <Navigate to="/player" />;
    }
    return <div>{children}</div>;
    };

export default GuestGuard;