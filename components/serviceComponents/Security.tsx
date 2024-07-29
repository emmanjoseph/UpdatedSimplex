import React from 'react'
import { motion } from 'framer-motion'
const Security = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.2}}
    >Security</motion.div>
  )
}

export default Security