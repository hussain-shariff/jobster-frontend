import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { useAppContext } from "../context"
import ClipLoader from "react-spinners/ClipLoader"
import { fetchUser } from "../hooks/useGetUser"
import { useQuery } from "react-query"

function UserInfoBtn() {
	const { toggleLogoutButton } = useAppContext()
	const { data, isLoading } = useQuery("get-user", fetchUser)

	return (
		<div
			className="flex items-center bg-[#ffffff28] cursor-pointer px-2 py-1 rounded-md 
        hover:bg-[#ffffff4d] transition ease-out duration-500"
			onClick={() => toggleLogoutButton()}
		>
			<FontAwesomeIcon
				icon={faUser}
				className="text-purple-500 p-2 rounded-full"
			/>
			<ClipLoader
				color="white"
				loading={isLoading}
				size={20}
				className="mx-2 -mb-1"
			/>
			{!isLoading && <p className="mr-2">{data.data.username}</p>}
			<FontAwesomeIcon icon={faCaretDown} className="mr-2" />
		</div>
	)
}

export default UserInfoBtn
