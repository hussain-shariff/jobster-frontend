import React, {useState} from 'react'
import JobInput from './JobInput'
import Select from 'react-select'
import {
    statusOptions,
    sortOptions,
    jobTypeOptions
} from '../searchOptions'

function SearchJobs() {
    const selectStyles = {
        control : (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor : "rgb(255 255 255 / 0.2)",
            borderColor : "rgb(255 255 255 / 0.00001)"
        }),
        placeholder : (baseStyles, state) => ({
            ...baseStyles,
            color : "rgb(255 255 255 / 0.5)"
        })
    }
    const [searchDetails, setSearchDetails] = useState({
        Search : '',
        status : '',
        type : '',
        sort : ''
    })

    const handleSearch = (e) =>{
        setSearchDetails(prev=>({
            ...searchDetails,
            [e.target.name] : e.target.value
        }))
    }

    const handleChange = (e) =>{
        console.log(e)
    }   

  return (
    <div className='text-black p-10 bg-white/20 rounded-md mb-5'>
        <h1 className=' text-white text-center text-2xl md:text-3xl'>Search Form</h1>
        <div className='grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-3 md:gap-y-3 mt-5'>
            <JobInput
                name='Search'
                handleChange={handleSearch}
                value={ searchDetails.name }
                type="text"/>
            <Select 
                placeholder={'Status'}
                options={statusOptions}
                isClearable={true}
                isSearchable={false}
                onChange={handleChange}
                styles={selectStyles} />
            <Select
                placeholder={"type"}
                options={jobTypeOptions}
                isClearable={true}
                isSearchable={false}
                onChange={handleChange}
                styles={selectStyles} />
            <Select 
                placeholder={"sort"}
                options={sortOptions}
                isClearable={true} 
                isSearchable={false}
                onChange={handleChange}
                styles={selectStyles}/>
            <button className='bg-white/30 rounded-md w-36 hover:bg-white/40
            transition ease-out duration-300 py-2 md:py-0 text-white'>
                Clear filters
            </button>
        </div>
    </div>
  )
}

export default SearchJobs