import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between p-10 flex-wrap'>
        <div className="footer-logo">
                <h2><span className='font-bold'>Tune</span>mate</h2>
            </div>
            <div>
            {new Date().getFullYear()} © TuneMate. All rights reserved.
            </div>
    </footer>
  )
}

export default Footer