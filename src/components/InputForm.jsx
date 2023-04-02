import React from 'react'

function InputForm({ name, type, value, autoComplete, setformData}) {
    const handleChange = (e) =>{
        setformData(prevState=>({
                ...prevState,
                [e.target.name] : e.target.value
            }))
    }
  return (
    <div className='relative'>
        <input required name={name} id={name} value={value} type={type} className='mt-1 py-1 px-2 bg-white/0
        rounded-sm text-white w-full focus:outline-none' placeholder={ name }
        autoComplete={ autoComplete } onChange={handleChange} />
        <div className='absolute w-full bg-white h-[1.5px]'></div>
    </div>
  )
}

export default InputForm