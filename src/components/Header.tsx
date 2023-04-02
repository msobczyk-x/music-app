import React from 'react'

const Header = () => {
  return (
    
    <div className='Header'>
        <div className="nav m-10 border-b-2 border-white ">
            <nav className="navbar flex flex-row gap-2 justify-between pb-10">
            <div className="navbar-logo">
                <h2><span className='font-bold'>Tune</span>mate</h2>
            </div>
            <ul className="navbar-links flex flex-row gap-4">
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Company</a></li>
                <li><a href='#'>Trending</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Community</a></li>
              </ul>
              <div className="navbar-login flex flex-row gap-10">
                <a href='#'>Sign Up</a>
                <a href='#'>Sign In</a>
                </div>
            </nav>
            </div>
    </div>
  )
}

export default Header