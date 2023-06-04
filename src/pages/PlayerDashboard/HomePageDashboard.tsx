import React, {useEffect, useState, Suspense} from 'react'
import { useNavigate } from 'react-router-dom'
import PlayButton from '@components/player/PlayButton'
import { BsFillPlayFill } from 'react-icons/bs'
const HomePageDashboard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [topArtists, setTopArtists] = useState([])
    const [recomendations, setRecomendations] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        async function fetchData() {
        const token = localStorage.getItem('token')
        if (token) {
        fetch('https://api.spotify.com/v1/me/top/artists/?limit=10', {
            headers: {
                'Authorization': 'Bearer ' + token
            }}).then(res => res.json()).then(data => {
                setTopArtists(data.items)
                
            }
            )
            fetch('https://api.spotify.com/v1/recommendations?limit=10&seed_artists=4NHQUGzhtTLFvgF5SZesLK', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }}).then(res => res.json()).then(data => {
                    setRecomendations(data.tracks)
                    setIsLoading(false)
                }
                )
            }
        }
        fetchData()
    }, [])
  return (
    <div className={`w-full`}>
        <h1 className='text-3xl font-bold text-white'>Home</h1>
        <Suspense fallback={<div>Loading...</div>}>

        <div className='flex flex-col items-start p-5  max-w-full mb-24 justify-center'>
            <h1 className='text-2xl font-bold text-white'>Recomendations</h1>
            <div className='flex flex-row flex-wrap'>
                {recomendations.map((track:any, index:any) => {
                    return (
                        <div className='flex flex-row items-center justify-center bg-zinc-600 p-5 m-5 gap-5 ' key={index}>
                        <div className='flex flex-col items-center justify-center   rounded-lg'  onClick={()=> {
                            navigate(`/player/`)
                        }}>
                            
                            <img className='w-40 h-40 rounded-full' src={track.album.images[0].url} alt={track.name}/>
                            <h1 className='text-lg font-bold text-white'>{track.name}</h1>
                        </div>
                        <PlayButton uris={track.uri} bgColor={true} text={<BsFillPlayFill className="" />} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
        <div className='flex flex-col items-start p-5  max-w-full'>
            <h1 className='text-2xl font-bold text-white'>Your Top Artists</h1>
            <div className='flex flex-row flex-wrap w-full items-start '>
                {topArtists.map((artist:any, index:any) => {
                    return (
                        <div className='flex flex-col items-center justify-center p-5 m-5 bg-zinc-600 rounded-lg' key={index} onClick={()=> {
                            navigate(`/player/artist/${artist.id}`)
                        }}>
                            <img className='w-40 h-40 rounded-full' src={artist.images[0].url} alt={artist.name}/>
                            <h1 className='text-lg font-bold text-white'>{artist.name}</h1>
                        </div>
                    )
                }
                )}
            </div>
        </div>
      
        </Suspense>

    </div>
  )
}

export default HomePageDashboard