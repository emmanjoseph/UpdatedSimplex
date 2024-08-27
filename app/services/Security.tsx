import { motion } from 'framer-motion'
import React from 'react'

const Security = () => {
  return (
     <motion.div
    initial={{y:50,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{delay:0.2,duration:1}}
    >
      Security Services
    </motion.div>
  )
}

export default Security
