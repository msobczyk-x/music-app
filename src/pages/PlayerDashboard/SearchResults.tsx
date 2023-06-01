import React, { Suspense, useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';

import PlayButton from '@/components/player/PlayButton';

const SearchResults = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<any>(sessionStorage.getItem('searchResults'));
    const [token, setToken] = React.useState(localStorage.getItem('token'))
    const [query, setQuery] = React.useState(sessionStorage.getItem('query'))
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = sessionStorage.getItem('searchResults')
            const json = JSON.parse(response!)
            setData(json)
            const query = sessionStorage.getItem('query')
            setQuery(query)
            setIsLoading(false)
            console.log(json)
        }
        fetchData()
    }, [params])



  return (
    <div>
        {isLoading ? <h1>Loading...</h1> :
        <div className='mb-24'>
        <h1 className="text-3xl  text-white">Search Results for <span className="text-3xl font-bold text-white">{query}</span></h1>
    
        <div className='flex flex-col w-full'>
            <h1 className="text-2xl text-white font-bold my-12">Tracks</h1>
            <div className='flex flex-row flex-wrap'>
                {data.tracks.items.map((track:any, index:any) => {
                    return (
                        <div className='flex flex-row items-center justify-center bg-zinc-600 p-5 m-5 gap-5 ' key={index}>
                        <div className='flex flex-col items-center justify-center   rounded-lg'  onClick={()=> {
                           
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

     
        <div className='flex flex-col w-full'>
            <h1 className="text-2xl text-white font-bold my-12">Artists</h1>
            <div className='flex flex-row flex-wrap'>
                {data.artists.items.map((track:any, index:any) => {
                    return (
                        <div className='flex flex-row items-center justify-center bg-zinc-600 p-5 m-5 gap-5 ' key={index}>
                        <div className='flex flex-col items-center justify-center   rounded-lg'  onClick={()=> {
                           
                        }}>
                            
                            <img className='w-40 h-40 rounded-full' src={track.images[0].url} alt={track.name}/>
                            <h1 className='text-lg font-bold text-white'>{track.name}</h1>
                        </div>
                        <PlayButton uris={track.uri} bgColor={true} text={<BsFillPlayFill className="" />} />
                        </div>
                    )
                }
                )}
            </div>
        </div>

        <div className='flex flex-col w-full'>
            <h1 className="text-2xl text-white font-bold my-12">Albums</h1>
            <div className='flex flex-row flex-wrap'>
                {data.albums.items.map((track:any, index:any) => {
                    return (
                        <div className='flex flex-row items-center justify-center bg-zinc-600 p-5 m-5 gap-5 ' key={index}>
                        <div className='flex flex-col items-center justify-center   rounded-lg'  onClick={()=> {
                           
                        }}>
                            
                            <img className='w-40 h-40 rounded-full' src={track.images[0].url} alt={track.name}/>
                            <h1 className='text-lg font-bold text-white'>{track.name}</h1>
                        </div>
                        <PlayButton uris={track.uri} bgColor={true} text={<BsFillPlayFill className="" />} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
        
      
        <div className='flex flex-col w-full'>
            <h1 className="text-2xl text-white font-bold my-12">Playlists</h1>
            <div className='flex flex-row flex-wrap'>
                {data.playlists.items.map((track:any, index:any) => {
                    return (
                        <div className='flex flex-row items-center justify-center bg-zinc-600 p-5 m-5 gap-5 ' key={index}>
                        <div className='flex flex-col items-center justify-center   rounded-lg'  onClick={()=> {
                           
                        }}>
                            
                            <img className='w-40 h-40 rounded-full' src={track.images[0].url} alt={track.name}/>
                            <h1 className='text-lg font-bold text-white'>{track.name}</h1>
                        </div>
                        <PlayButton uris={track.uri} bgColor={true} text={<BsFillPlayFill className="" />} />
                        </div>
                    )
                }
                )}
            </div>
        </div>

        </div>

            } 
 </div>
 
    
  )
}

export default SearchResults