import React, {createContext, useState, useContext, useReducer } from 'react'
import jobsReducer, {initialState} from './reducer'
import getAllJobs from "../hooks/useGetJobs"
const jobContext = createContext()

function JobsProvider({children}) {
    const [state, dispatch] = useReducer(jobsReducer, initialState)

    const getJobs = async () =>{
      const allJobs = await getAllJobs()
      dispatch({
        type : "GET_ALL_JOBS",
        jobs : allJobs
      })
    }

    const toggleSidebar = () => {
      dispatch({ type: 'TOGGLE_SIDEBAR' });
    };

    const values = {
        state,
        getJobs,
        toggleSidebar
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