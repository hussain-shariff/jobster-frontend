import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "../components/SideBar"
import MainNav from "../components/MainNav"
import Stats from "./Stats"
import AllJobs from "./AllJobs"
import AddJob from "./AddJob"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useAppContext } from "../context"
import UserProfile from "./UserProfile"
import { fetchUser } from "../hooks/useGetUser"
import { useQuery } from "react-query"

function Main() {
	const user = localStorage.getItem("user")
	const navigate = useNavigate()
	const { state, getUser } = useAppContext()
	const { showSideBar, currentPage } = state
	const { data, isLoading } = useQuery("get-user", fetchUser, {
		onSuccess: (data) => getUser(data.data),
	})

	useEffect(() => {
		if (!user) {
			navigate("/")
		}
	}, [])

	return (
		<div className="bg-gradient-to-l min-h-screen from-[#130e3e] to-[#030209]">
			<MainNav />
			{showSideBar && <SideBar />}
			{currentPage === "Stats" && <Stats />}
			{currentPage === "All jobs" && <AllJobs />}
			<div className="px-12 md:px-20 mt-5">
				{currentPage === "Add a job" && <AddJob />}
				{currentPage === "Profile" && <UserProfile />}
			</div>
			<ToastContainer />
		</div>
	)
}

export default Main
