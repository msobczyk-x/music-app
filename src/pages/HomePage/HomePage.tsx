import React from 'react'
import Header from '@components/Header';
import Main from './Main';
import Artists from './Artists';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Header/>
      <Main/>
      <Artists />
      </div>
  )
}

export default HomePage;