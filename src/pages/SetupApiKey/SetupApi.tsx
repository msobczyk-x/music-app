import React from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import {useSelector, useDispatch} from 'react-redux'
import { setUser } from '@/utils/UserSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SetupApi = () => {
    const CLIENT_ID = "4abcd7b187ea4746b066e52ab0ec4c00"
    const REDIRECT_URI = "http://localhost:5173/setup-api-key"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const hash = window.location.hash
        let token = localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token);
        if (token) {
            navigate('/player')
        }
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
        
    
  return (
    <div>
        SetupApi
        <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>
    </div>
  )
}

export default SetupApi