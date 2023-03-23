import React from 'react'

function InputForm({ name, type, value, autoComplete, setformData}) {
    const handleChange = (e) =>{
        setformData(prevState=>({
                ...prevState,
                [e.target.name] : e.target.value
            }))
    }
  return (
    <div>
        <input required name={name} id={name} value={value} type={type} className='mt-2 p-2 bg-inherit border-2
        rounded-md w-full focus:outline-none border-gray-500 focus:border-blue-600' placeholder={ name }
        autoComplete={ autoComplete } onChange={handleChange} />
    </div>
  )
}

export default InputForm