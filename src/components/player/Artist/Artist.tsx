import React from 'react'
import { useParams } from 'react-router-dom'

const Artist = () => {
    const [artist, setArtist] = React.useState<any>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    const params = useParams();

    React.useEffect(() => {
        const fetchArtist = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/artists/${params.id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                const data = await response.json()
                console.log(data)
                setArtist(data)
                console.log(artist)
                setIsLoading(false)
            } catch (error) {
                setError(true)
            }
        }
        fetchArtist()
    }, [params])

  return (
    <div>
        {
            isLoading ? <h1>Loading...</h1> : 

    <>
     <img src={artist.images[0].url} alt={artist.name}/>
        <h1>{artist.name}</h1>
        <h2>Genres: {artist.genres}</h2>
    </>
}
    </div>
  )
}

export default Artist