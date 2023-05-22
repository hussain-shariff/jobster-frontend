import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppContext } from '../context';
import { Link } from 'react-router-dom';

function SideSectionItem({ name, icon, url}) {
  const {toggleSidebar, setcurrentPage} = useAppContext()

  return (
    <Link to={url} className='cursor-pointer hover:scale-110 transition ease-out duration-500'
    onClick={()=> {
          toggleSidebar()
      }}>
            <FontAwesomeIcon icon={icon} className='mr-2 h-4'/>{name}
    </Link>
  )
}

export default SideSectionItem