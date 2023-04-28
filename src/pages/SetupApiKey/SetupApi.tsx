import React from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import {useSelector, useDispatch} from 'react-redux'
import { setUser } from '@/utils/UserSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Buffer } from 'buffer'
/* const SetupApi = () => {
    const CLIENT_ID = "4abcd7b187ea4746b066e52ab0ec4c00"
    const REDIRECT_URI = "http://localhost:5173/setup-api-key"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const CLIENT_SECRET = "0f8aee8302154da99c35440c326d4982"

const [token, setToken] = useState(null);

useEffect(() => {
  const authOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
    },
    body: 'grant_type=client_credentials user-read-private user-read-email streaming web-playback'
  };

  fetch('https://accounts.spotify.com/api/token', authOptions)
    .then(response => response.json())
    .then(data => setToken(data.access_token))
    .catch(error => console.error(error));
}, []);

return (
  <div>
    {token ? (
      <p>Access token: {token}</p>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
}; */
const SetupApi = () => {
  const CLIENT_ID = "4abcd7b187ea4746b066e52ab0ec4c00"
  const REDIRECT_URI = "http://localhost:5173/setup-api-key"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      const hash = window.location.hash
      let token = localStorage.getItem("code")

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
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-email+user-read-private+streaming`}>Login
                      to Spotify</a>
                  : <button onClick={logout}>Logout</button>}
          </header>
  </div>
)
}




export default SetupApi