import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideSectionItem({ name, icon, setcurrentPage}) {
  return (
    <h3 className='cursor-pointer hover:text-white transition ease-out duration-500'
    onClick={()=> setcurrentPage(name)}>
            <FontAwesomeIcon icon={icon} className='mr-2 h-4'/>{name}
    </h3>
  )
}

export default SideSectionItem