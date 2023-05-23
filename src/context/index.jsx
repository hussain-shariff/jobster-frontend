import React, { createContext, useContext, useReducer } from "react"
import jobsReducer, { initialState } from "./reducer"
const jobContext = createContext()

function JobsProvider({ children }) {
	const [state, dispatch] = useReducer(jobsReducer, initialState)

	const setUser = (userData) => {
		dispatch({ type: "SET_USER", userData })
	}

	const toggleSidebar = () => {
		dispatch({ type: "TOGGLE_SIDEBAR" })
	}

	const values = {
		state,
		setUser,
		toggleSidebar,
	}
	return <jobContext.Provider value={values}>{children}</jobContext.Provider>
}

const useAppContext = () => {
	return useContext(jobContext)
}

export { JobsProvider, useAppContext }
