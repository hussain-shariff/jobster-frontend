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
    
    const clearValues = () =>{
      dispatch({ type: 'CLEAR_VALUES' });
    }
    const setLoading = () =>{
      dispatch({ type: 'SET_LOADING' });
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
        state.updatedUser,
        state.lastname,
        state.userLocation
      )
      dispatch({ type : "UPDATE_USER_SUCCESSFULL"})
    }


    const values = {
        state,
        handleChange,
        getUser,
        toggleSidebar,
        setcurrentPage,
        toggleLogoutButton,
        deleteOneJob,
        createJob,
        editJob,
        clearValues,
        updateJob,
        updateUser,
        setLoading
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