import React , {useState}from 'react'
import JobInput from '../components/JobInput'
import Select from 'react-select'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../context';
import {
    statusOptions,
    jobTypeOptions
} from '../searchOptions'

function AddJob() {
    const {createJob, updateJob, state, handleChange, clearValues} = useAppContext()
    const {isEditing, position, company, location, jobType, status} = state

    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value
        handleChange(name, value)
    }

    const handleStatus = (e) =>{
        handleChange('status', e.value)
    }  
    const handleJobType = (e) =>{
        handleChange('jobType', e.value)
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(isEditing){
            updateJob()
        }
        else{
            createJob()
        }
        clearValues()
    }   

  return (
    <form className='text-black p-10 bg-white/20 rounded-md mb-5'
    onSubmit={handleSubmit}>
        <h1 className=' text-white text-center text-2xl md:text-3xl'>
            {isEditing ? 'Edit Job' : 'Add Job'}
        </h1>
        <div className='grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-3 md:gap-y-7 mt-5'>
            <JobInput
                name='company'
                handleChange={handleSearch}
                value={ company }
                type="text"/>
            <JobInput
                name='position'
                handleChange={handleSearch}
                value={ position}
                type="text"/>
            <JobInput
                name='location'
                handleChange={handleSearch}
                value={ location }
                type="text"/>
            <Select
                placeholder={"Status"}
                options={statusOptions}
                isClearable={false}
                isSearchable={false}
                onChange={handleStatus} />
            <Select 
                placeholder={"Job Type"}
                options={jobTypeOptions}
                isClearable={false} 
                isSearchable={false}
                onChange={handleJobType}/>
            <div className='flex gap-5 mt-3 md:mt-0 '>
                <button type='submit' className='bg-white/30 rounded-md w-36 hover:bg-white/40
                transition ease-out duration-300 py-2 md:py-0 text-white'>
                    Submit
                </button>
                <button className='bg-white/30 rounded-md w-36 hover:bg-white/40
                transition ease-out duration-300 py-2 md:py-0 text-white' onClick={()=> clearValues()}>
                    Clear
                </button>
            </div>
        </div>
        <ToastContainer/>
    </form>
  )
}

export default AddJob