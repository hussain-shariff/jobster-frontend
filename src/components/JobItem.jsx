import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function JobItem({icon, name}) {
  return (
    <div className='flex items-center gap-1'>
      <FontAwesomeIcon icon={icon} className='h-3'/>
      <h4 className='text-sm'>{name}</h4>
    </div>
  )
}

export default JobItem