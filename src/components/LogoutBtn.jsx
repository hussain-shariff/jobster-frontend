import React from 'react'
import { motion } from 'framer-motion'

function LogoutBtn({handleLogOut}) {
  return (
    <motion.h2
            onClick={handleLogOut}
            initial = {{ y : '-4vh' }}
            animate = {{ y : 0 }}
            transition = {{ duration: 0.2 }}
            className='absolute top-12 bg-[#ffffff38] text-center w-28 ml-2 rounded-md py-1
            hover:bg-[#ffffff4d] transition ease-out duration-500 cursor-pointer'>Logout
    </motion.h2>
  )
}

export default LogoutBtn