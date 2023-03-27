import React , {useState}from 'react'
import JobInput from '../components/JobInput'
import Select from 'react-select'
import {
    statusOptions,
    jobTypeOptions
} from '../searchOptions'

function AddJob() {

    const [searchDetails, setSearchDetails] = useState({
        company : '',
        position : '',
        location : '',
        type : '',
        status : '',
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
        <h1 className=' text-white text-center text-2xl md:text-3xl'>Add Job</h1>
        <div className='grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-3 md:gap-y-7 mt-5'>
            <JobInput
                name='company'
                handleChange={handleSearch}
                value={ searchDetails.name }
                type="text"/>
            <JobInput
                name='position'
                handleChange={handleSearch}
                value={ searchDetails.name }
                type="text"/>
            <JobInput
                name='location'
                handleChange={handleSearch}
                value={ searchDetails.name }
                type="text"/>
            <Select
                placeholder={"Status"}
                options={statusOptions}
                isClearable={true}
                isSearchable={false}
                onChange={handleChange} />
            <Select 
                placeholder={"Job Type"}
                options={jobTypeOptions}
                isClearable={true} 
                isSearchable={false}
                onChange={handleChange}/>
            <div className='flex gap-5 mt-3 md:mt-0 '>
                <button className='bg-white/30 rounded-md w-36 hover:bg-white/40
                transition ease-out duration-300 py-2 md:py-0 text-white'>
                    Submit
                </button>
                <button className='bg-white/30 rounded-md w-36 hover:bg-white/40
                transition ease-out duration-300 py-2 md:py-0 text-white'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddJob