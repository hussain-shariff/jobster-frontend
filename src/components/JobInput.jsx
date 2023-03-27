import React from 'react'

function JobInput({name, handleChange, type, value}) {
  return (
    <div>
        <input required name={name} id={name} value={value} type={type} className='mt-1 py-1 px-2 bg-inherit border
        rounded-md text-white w-full focus:outline-none border-white' placeholder={ name } onChange={handleChange} />
    </div>
  )
}

export default JobInput