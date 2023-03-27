import React, {useState} from 'react'
import JobInput from './JobInput'

function SearchJobs() {
    const [searchDetails, setSearchDetails] = useState({
        name : '',
        status : '',
        type : '',
        sort : ''
    })

    const handleChange = (e) =>{
        setSearchDetails(prev=>({
            ...searchDetails,
            [e.target.name] : e.target.value
        }))
    }

  return (
    <div className='text-white p-10 bg-white/20 rounded-md mb-5'>
        <h1 className='text-center text-2xl md:text-3xl'>Search Form</h1>
        <div className='grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-3 md:gap-y-3 mt-5'>
            <JobInput
                name='Search'
                handleChange={handleChange}
                value={ searchDetails.name }
                type="text"/>
            <JobInput
                name='status'
                handleChange={handleChange}
                value={ searchDetails.name }
                type="text"/>
            <JobInput
                name='type'
                handleChange={handleChange}
                value={ searchDetails.name }
                type="text"/>
            <JobInput
                name='sort'
                handleChange={handleChange}
                value={ searchDetails.name }
                type="text"/>
            <button className='bg-white/30 rounded-md w-36 hover:bg-white/40
            transition ease-out duration-300 py-2 md:py-0'>
                Clear filters
            </button>
        </div>
    </div>
  )
}

export default SearchJobs