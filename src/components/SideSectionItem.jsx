import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppContext } from '../context';

function SideSectionItem({ name, icon}) {
  const {toggleSidebar, setcurrentPage, state} = useAppContext()

  return (
    <h3 className='cursor-pointer hover:scale-110 transition ease-out duration-500'
    onClick={()=> setcurrentPage(name)}>
            <FontAwesomeIcon icon={icon} className='mr-2 h-4'/>{name}
    </h3>
  )
}

export default SideSectionItem