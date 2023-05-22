import React, {createContext, useState, useContext, useReducer } from 'react'
import jobsReducer, {initialState} from './reducer'
import deleteJob from '../hooks/useDelete'
import useCreateJob from '../hooks/useCreateJob'
import useEditJob from '../hooks/useEditJob'
import useUpdateUser from '../hooks/useUpdateUser'
const jobContext = createContext()

function JobsProvider({children}) {
    const [state, dispatch] = useReducer(jobsReducer, initialState)

    const getUser = (userData) =>{
      dispatch({type : "SET_USER", userData})
    }
    
    const deleteOneJob = async (id) =>{
      await deleteJob(id)
      dispatch({ type : "DELETE_JOB", id})
    }
    
    const createJob = async () =>{
      await useCreateJob(
        state.company,
        state.position,
        state.location,
        state.jobType,
        state.status,
      )
    }

    const toggleSidebar = () => {
      dispatch({ type: 'TOGGLE_SIDEBAR' });
    };

    const setcurrentPage = (page) => {
      dispatch({ type: 'SET_CURRENT_PAGE', page });
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
    const updateUser = async ()=>{
      await useUpdateUser(
        state.updatedUser,
        state.lastname,
        state.userLocation
      )
      dispatch({ type : "UPDATE_USER_SUCCESSFULL"})
    }


    const values = {
        state,
        getUser,
        toggleSidebar,
        setcurrentPage,
        deleteOneJob,
        createJob,
        editJob,
        updateJob,
        updateUser,
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