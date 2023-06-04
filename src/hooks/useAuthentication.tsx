import { useState } from "react";
import { useDispatch } from "react-redux";

import { createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut } from "firebase/auth";
import { clearUserData, setUser } from "@utils/UserSlice";
import  {auth}  from "@services/firebase";

export default function useAuthentication() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const signInCall = async ({ email, password }: any) => {
        setIsLoading(true);
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser(user));
            console.log(user);
            localStorage.setItem("spotifyApiKey", user?.photoURL || "");
        } catch (error: any) {
            throw new Error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const signUpCall = async ({email,password} : any) => {
        setIsLoading(true);
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(setUser(user));
        } catch (error:any) {
            throw new Error(error.message);
        } finally {
            setIsLoading(false);
        };
    };

    const signOutCall = async () => {
        setIsLoading(true);
        try {
            await signOut(auth);
            dispatch(clearUserData());
            localStorage.removeItem('token');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        };
    };


    return {
        isLoading,
        signInCall,
        signUpCall,
        signOutCall,

    };

    }