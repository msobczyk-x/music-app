import React, { useCallback, useEffect, useState } from 'react'


type PlayerBarProps = {
  token: string | null
  player: Spotify.Player | undefined  
}


const PlayerBar = ({token, player}: PlayerBarProps) => {
  const [current_track, setTrack] = useState<Spotify.Track|null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
 
useEffect(() => {
  if (player) {
    player.addListener('player_state_changed', state => {
      if (!state) {
        return;
      }
      setTrack(state.track_window.current_track)
      setIsPlaying(!state.paused)
      setIsPaused(state.paused)
      setProgress(state.position)
      setDuration(state.duration)
    })
  }
}, [player])




  return (
    <div className='h-24 flex flex-row items-center justify-center fixed bottom-0 w-full '>
      
        { current_track && 
   <div className='flex flex-row items-center justify-center'>
        <img className='h-16 w-16 rounded-full' src={current_track.album.images[0].url}  />
        <div className='flex flex-col items-center justify-center ml-4'>
          <p className='text-white'>{current_track.name}</p>
          <p className='text-white'>{current_track.artists[0].name}</p></div>
          </div>
         
          }

      

        <div className='flex flex-row items-center justify-center ml-4'>
          <button className='text-white' onClick={() => 
            {
              console.log(player)
              player?.previousTrack()}}>{'<<'}</button>
          <button className='text-white' onClick={() => player?.togglePlay()}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button className='text-white' onClick={() => player?.nextTrack()}>{'>>'}</button>
          </div>
        </div>
          



  )
}

export default PlayerBar