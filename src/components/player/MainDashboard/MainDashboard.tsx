import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/HomePage/HomePage'
import Signup from '@/pages/LoginPage/Signup'
import Playlist from '@/components/player/Playlist/Playlist'
import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
import Artist from '@components/player/Artist/Artist'
import HomePageDashboard from '@pages/PlayerDashboard/HomePageDashboard'
import SearchResults from '@pages/PlayerDashboard/SearchResults'


const Main = () => {
  return (
    <div className={`flex flex-col items-start p-5 bg-gradient-to-b from-zinc-700 max-w-full h-full `}>

    <Routes>
      <Route path='/' element={<HomePageDashboard />} errorElement={<ErrorPage/>}/>
      <Route path='/playlist/:id' element={<Playlist />} errorElement={<ErrorPage/>}/>
      <Route path='/search/:query' element={<SearchResults/>} errorElement={<ErrorPage/>}/>
      
      <Route path='/artist/:id' element={<Artist/>} errorElement={<ErrorPage/>}/>
    </Routes>
    <Outlet/>
    </div>
  )
}

export default Main