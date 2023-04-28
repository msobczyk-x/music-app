import React, { useCallback, useEffect, useState } from 'react'


type PlayerBarProps = {
  token: string | null
  player: Spotify.Player | undefined  
}
const track = {
  name: "",
  album: {
      images: [
          { url: "" }
      ]
  },
  artists: [
      { name: "" }
  ]
}

const PlayerBar = ({token, player}: PlayerBarProps) => {

 




  return (
    <div className='h-24 flex flex-row items-center justify-center fixed bottom-0 w-full'>
  

    </div>

  )
}

export default PlayerBar