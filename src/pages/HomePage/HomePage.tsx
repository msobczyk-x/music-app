import React from 'react'
import Navbar from '@components/Navigation';
import Main from './Main';
import Available from './Available';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className='HomePage flex flex-col relative w-full'>
      <Navbar/>
      <Main/>
      <Available />
      <Footer />

    </div>
  )
}

export default HomePage;