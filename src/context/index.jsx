import React, {createContext, useState, useContext, useReducer } from 'react'
import jobsReducer, {initialState} from './reducer'
import getAllJobs from "../hooks/useGetJobs"
import deleteJob from '../hooks/useDelete'
import useCreateJob from '../hooks/useCreateJob'
const jobContext = createContext()

function JobsProvider({children}) {
    const [state, dispatch] = useReducer(jobsReducer, initialState)

    const getUser = async () =>{
      const user = localStorage.getItem('user')
      dispatch({type : "SET_USER", user})
    }
    
    const getJobs = async () =>{
      const allJobs = await getAllJobs()
      dispatch({
        type : "GET_ALL_JOBS",
        jobs : allJobs
      })
    }
    
    const deleteOneJob = async (id) =>{
      await deleteJob(id)
    }
    
    const createJob = async (jobDetails) =>{
      await useCreateJob(jobDetails)
    }

    const toggleSidebar = () => {
      dispatch({ type: 'TOGGLE_SIDEBAR' });
    };
    
    const toggleLogoutButton = () => {
      dispatch({ type: 'TOGGLE_LOGOUT_BUTTON' });
    };

    const setcurrentPage = (page) => {
      dispatch({ type: 'SET_CURRENT_PAGE', page });
    };

    const editJob = async (jobDetails) =>{
        dispatch({ type : "SET_EDIT_JOB_DATA", jobDetails})
        setcurrentPage('Add a job')
        // await useCreateJob(jobDetails)
    }

    const values = {
        state,
        getUser,
        getJobs,
        toggleSidebar,
        setcurrentPage,
        toggleLogoutButton,
        deleteOneJob,
        createJob,
        editJob
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