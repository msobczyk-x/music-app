import React from 'react'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  const [playlists, setPlaylists] = React.useState<any>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [togglePlaylists, setTogglePlaylists] = React.useState(false)

  React.useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        
        const data = await response.json()
        setPlaylists(data.items)
        setIsLoading(false)
      } catch (error) {
        setError(true)
      }
    }
    if (localStorage.getItem('token'))
    {
      fetchPlaylists()
    }
    

  }, [])

  return (
    <div className='flex flex-col items-start p-5 bg-zinc-900' onClick={()=> {
      setTogglePlaylists(!togglePlaylists)
    }}>
      <div className='w-full flex flex-row justify-between'>
      <h2 className='border-b-2 border-zinc-600 font-bold mb-1'>Playlists</h2>
      <button className='text-zinc-400 sm:hidden'>
      {(togglePlaylists) ? <AiOutlineArrowUp className='w-5 h-5'/> : <AiOutlineArrowDown className='w-5 h-5' />}
      </button>
      </div>
      <div className={`sm:flex sm:flex-col items-start justify-start w-full ${(togglePlaylists) ? '':'hidden' } ` } >
      {isLoading? <p>Loading...</p> : playlists.map((playlist: any, index: number) => {
        return (
          <NavLink to={`/player/playlist/${playlist.id}`} key={index} className='flex flex-row items-center justify-start w-full text-zinc-400 truncate mt-2 text-sm active:text-white'>
        {playlist.name}
          </NavLink>
        )
      })
      }
   
          </div>
    </div>
  )
}

export default Sidebar