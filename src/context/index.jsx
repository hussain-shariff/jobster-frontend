import React, {createContext, useState, useContext, useReducer } from 'react'
import jobsReducer, {initialState} from './reducer'
import deleteJob from '../hooks/useDelete'
import useEditJob from '../hooks/useEditJob'
import useUpdateUser from '../hooks/useUpdateUser'
const jobContext = createContext()

function JobsProvider({children}) {
    const [state, dispatch] = useReducer(jobsReducer, initialState)

    const setUser = (userData) =>{
      dispatch({type : "SET_USER", userData})
    }

    const toggleSidebar = () => {
      dispatch({ type: 'TOGGLE_SIDEBAR' });
    };

    const editJob = async (id) =>{
        dispatch({ type : "SET_EDIT_JOB_DATA", id})
        setcurrentPage('Add a job')
        
    }
    const updateJob = async ()=>{
      await useEditJob(
        state.company,
        state.position,
        state.location,
        state.jobType,
        state.status,
        state.editJobId
      )
    }


    const values = {
        state,
        setUser,
        toggleSidebar,
        editJob,
        updateJob,
    }
  return (
    <jobContext.Provider value={values}>
        {children}
    </jobContext.Provider>
  )
}

const useAppContext = () =>{
  return useContext(jobContext)
}

export {JobsProvider, useAppContext}