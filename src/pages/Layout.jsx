import React, { useEffect } from "react"
import MainNav from "../components/MainNav"
import SideBar from "../components/SideBar"
import { useAppContext } from "../context"
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"
import { fetchUser } from "../hooks/useGetUser"
import { ToastContainer } from "react-toastify"

const Layout = ({ children }) => {
	const { state, setUser } = useAppContext()
	const { showSideBar } = state
    const navigate = useNavigate()
    const user = localStorage.getItem("user")
	const { data, isLoading } = useQuery("get-user", fetchUser, {
		onSuccess: (data) => setUser(data.data),
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
			{children}
			<ToastContainer />
		</div>
	)
}

export default Layout
