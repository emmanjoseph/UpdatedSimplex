import React from 'react'
import { motion } from 'framer-motion'

const Electrical = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.2}}
    >Electrical</motion.div>
  )
}

export default Electrical