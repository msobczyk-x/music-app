import React from 'react'
import {motion} from 'framer-motion'
const Artists = () => {
  return (
    <motion.div className='Artists w-full flex items-center justify-center my-24 '
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
      
    >
      <div className='flex items-center justify-between flex-col  w-3/4 h-96 rounded-3xl py-16 bg-gradient-to-r 
bbg-gradient-to-b from-yellow-300 to-orange-500
animate-gradient-x'>
      <h2 className='text-3xl'>
              <span className="font-bold">Tune</span>mate
            </h2>

            <h1 className='text-7xl font-bold'>Never stop listening</h1>
            <h5>Available on Web, iOS, Android</h5>

        </div>
    </motion.div>
  )
}

export default Artists