import React, {createContext, useState, useContext, useReducer } from 'react'
import jobsReducer, {initialState} from './reducer'
import getAllJobs from "../hooks/useGetJobs"
import deleteJob from '../hooks/useDelete'
import useCreateJob from '../hooks/useCreateJob'
import useEditJob from '../hooks/useEditJob'
import useUpdateUser from '../hooks/useUpdateUser'
import getCurrentUser from '../hooks/useGetUser'
const jobContext = createContext()

function JobsProvider({children}) {
    const [state, dispatch] = useReducer(jobsReducer, initialState)

    const getUser = async () =>{
      const userData = await getCurrentUser()
      dispatch({type : "SET_USER", userData})
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
    
    const clearValues = () =>{
      dispatch({ type: 'CLEAR_VALUES' });
    }
    
    const createJob = async () =>{
      await useCreateJob(
        state.company,
        state.position,
        state.location,
        state.jobType,
        state.status
      )
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
    
    const handleChange = (name, value) => {
      dispatch({ type: 'HANDLE_CHANGE', payload : {name, value} });
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
        state.user,
        state.lastname,
        state.userLocation
      )
    }


    const values = {
        state,
        handleChange,
        getUser,
        getJobs,
        toggleSidebar,
        setcurrentPage,
        toggleLogoutButton,
        deleteOneJob,
        createJob,
        editJob,
        clearValues,
        updateJob,
        updateUser
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