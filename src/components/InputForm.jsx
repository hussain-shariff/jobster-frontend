import React from 'react'

function InputForm({ name, type, value, autoComplete, setformData, error, seterror }) {
    const handleChange = (e) =>{
        if(seterror){
          seterror(false)
        }
        setformData(prevState=>({
                ...prevState,
                [e.target.name] : e.target.value
            }))
    }
  return (
    <div>
        <input required name={name} id={name} value={value} type={type} className={`mt-2 p-2 bg-inherit border-2
        rounded-md w-full focus:outline-none ${error ? 'border-red-500' :'border-gray-500'} focus:border-blue-600`} placeholder={ name }
        autoComplete={ autoComplete } onChange={handleChange} />
        {error && <p className='text-red-500 text-sm mt-1'>Email already in use</p>}
    </div>
  )
}

export default InputForm