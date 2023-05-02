import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
const PlayButton = ({uris, text, bgColor, contextUri} : any) => {
const handleSubmit = (e: any) => {
    e.preventDefault()
    if (uris) {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${localStorage.getItem('device_id')}`, {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,               },
                    body: JSON.stringify({
                        uris: [uris],
                        

                })}).catch((error) => {
                    console.log(error)
                    console.log(error.message)
                })}
    else if (contextUri) {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${localStorage.getItem('device_id')}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,               },
            body: JSON.stringify({
                'context_uri': contextUri,
                

        })}).catch((error) => {
            console.log(error)
            console.log(error.message)
        })}}

    
  return (
<>
<button className={`hover:bg-yellow-400  w-10 h-10 p-2 rounded-full flex justify-center items-center ${bgColor && 'bg-yellow-400'}`} onClick={(e)=> { 
                handleSubmit(e)
}}
                >{text}</button>
</>
  )
}

export default PlayButton