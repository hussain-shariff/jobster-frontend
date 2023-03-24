import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faChartSimple,
    faMagnifyingGlass,
    faFileInvoice,
    faAddressCard 
    } from '@fortawesome/free-solid-svg-icons'

function SideSectionItem({ name, icon}) {
  return (
    <h3 className='cursor-pointer hover:text-white transition ease-out duration-500'>
            <FontAwesomeIcon icon={icon} className='mr-2 h-5'/>{name}
    </h3>
  )
}

export default SideSectionItem