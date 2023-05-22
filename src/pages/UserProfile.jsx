import React from 'react'
import JobInput from '../components/JobInput'
import { useAppContext } from '../context';
import { notifyError } from '../hooks/useNotifications';

function UserProfile() {
    const {state, handleChange, updateUser} = useAppContext()
    const {user, lastname, userLocation, updatedUser} = state

    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value
        handleChange(name, value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(user === 'test user'){
            notifyError('test user! read only.')
        }else{
            updateUser()
        }
    }

  return (
    <div className='p-10 rounded-md px-12 md:px-20 mt-5'>
        <h1 className='text-center text-3xl text-white mb-3'>Profile</h1>
        <form className='grid grid-cols-1 md:grid-cols-3 gap-3 ' onSubmit={handleSubmit}>
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
            <button type='submit' className='bg-white/30 mt-3  rounded-sm w-36 hover:bg-white/40
                transition ease-out duration-300 py-1 text-white'>
                Save Changes
            </button>
        </form>
    </div>
  )
}

export default UserProfile