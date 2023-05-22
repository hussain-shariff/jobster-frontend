import React, { useEffect } from "react"
import MainNav from "../components/MainNav"
import SideBar from "../components/SideBar"
import { useAppContext } from "../context"
import { useNavigate } from "react-router-dom"

const Layout = ({ children }) => {
	const { state } = useAppContext()
	const { showSideBar } = state
    const navigate = useNavigate()
    const user = localStorage.getItem("user")
    
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
		</div>
	)
}

export default Layout
