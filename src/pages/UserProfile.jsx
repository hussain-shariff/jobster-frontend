import React from 'react'
import JobInput from '../components/JobInput'
import { useAppContext } from '../context';

function UserProfile() {
    const {state, handleChange, updateUser, clearValues} = useAppContext()
    const {user, lastname, userLocation, updatedUser} = state

    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value
        handleChange(name, value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        updateUser()
    }

  return (
    <form className='grid grid-cols-1 md:grid-cols-3 gap-3 bg-white/20 p-10' onSubmit={handleSubmit}>
        <JobInput
            name='updatedUser'
            handleChange={handleSearch}
            value={ updatedUser }
            type="text"/>
        <JobInput
            name='lastname'
            handleChange={handleSearch}
            value={ lastname }
            type="text"/>
        <JobInput
            name='userLocation'
            handleChange={handleSearch}
            value={ userLocation }
            type="text"/>
        <button type='submit' className='bg-white/30  rounded-md w-36 hover:bg-white/40
            transition ease-out duration-300 py-1 text-white'>
            Save Changes
        </button>
    </form>
  )
}

export default UserProfile