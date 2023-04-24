import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import useAuthentication from '@/hooks/useAuthentication'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk'
const PlayerDashboard = () => {
  const user = useSelector((state: any) => state.UserSlice.user)
  const [spotifyApiKey, setSpotifyApiKey] = React.useState(localStorage.getItem('token'));
  const {signOutCall} = useAuthentication()
  const signOut = async () => {
    await signOutCall()
  };

  const navigate = useNavigate();

useEffect(() => {
  if (!spotifyApiKey) {

    navigate('/setup-api-key')
}});


  return (

    <div>PlayerDashboard
      <div>{user?.email}</div>



      <div onClick={signOut}>
        Sign Out
      </div>

    </div>
  )
}

export default PlayerDashboard