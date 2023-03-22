import React from 'react'

function InputForm({ name, type, value, placeholder, autoComplete, setformData }) {
    const handleChange = (e) =>{
        setformData(prevState=>({
                ...prevState,
                [e.target.name] : e.target.value
            }))
    }
  return (
    <div>
        <label htmlFor={name}>{ name }</label>
        <input required name={name} id={name} value={value} type={type} className='mt-2 p-2 bg-inherit border-2
        border-gray-500 rounded-md w-full focus:outline-none focus:border-blue-600' placeholder={ placeholder }
        autoComplete={ autoComplete } onChange={handleChange} />
    </div>
  )
}

export default InputForm