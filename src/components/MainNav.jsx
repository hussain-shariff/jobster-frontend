import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Logo from "./Logo"
import UserInfoBtn from "./UserInfoBtn"
import LogoutBtn from "./LogoutBtn"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context"

function MainNav() {
	const [isLogoutBtn, setisLogoutBtn] = useState(false)
	const { toggleSidebar, state, setcurrentPage } = useAppContext()
	const { showSideBar } = state
	const navigate = useNavigate()

	const handleLogOut = () => {
		localStorage.removeItem("user")
		localStorage.removeItem("token")
		setcurrentPage("Stats")
		navigate("/")
	}

	return (
		<div
			className="text-white z-50 sticky top-0 backdrop-blur-md flex items-center 
    justify-between px-10 py-5 md:px-20"
		>
			<div>
				{!showSideBar && (
					<div className="flex gap-3 items-center">
						<FontAwesomeIcon
							onClick={() => {
								toggleSidebar()
							}}
							icon={faBars}
							className="h-6 cursor-pointer"
						/>
						<Logo />
					</div>
				)}
			</div>
			<div className="relative">
				<UserInfoBtn setisLogoutBtn={setisLogoutBtn} />
				{isLogoutBtn && <LogoutBtn handleLogOut={handleLogOut} />}
			</div>
		</div>
	)
}

export default MainNav
