import React, {useRef} from "react"
import JobInput from "../components/JobInput"
import { useAppContext } from "../context"
import { notifyError } from "../hooks/useNotifications"
import { updateUser } from "../hooks/useUpdateUser"

function UserProfile() {
	const userNameRef = useRef()
	const lastNameRef = useRef()
	const locationRef = useRef()
	const { state } = useAppContext()
	const { user, updatedUser, lastname, userLocation } = state
	const { mutate } = updateUser()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (user === "test user") {
			notifyError("test user! read only.")
		} else {
			mutate({
				username: userNameRef.current.value,
				lastname: lastNameRef.current.value,
				location: locationRef.current.value,
			})
		}
	}

	return (
		<div className="p-10 rounded-md px-12 md:px-20 mt-5">
			<h1 className="text-center text-3xl text-white mb-3">Profile</h1>
			<form
				className="grid grid-cols-1 md:grid-cols-3 gap-3 "
				onSubmit={handleSubmit}
			>
				<JobInput
					name="updatedUser"
					defaultValue={updatedUser}
					refi={userNameRef}
					type="text"
				/>
				<JobInput
					name="lastname"
					refi={lastNameRef}
					defaultValue={lastname}
					type="text"
				/>
				<JobInput
					name="userLocation"
					refi={locationRef}
					defaultValue={userLocation}
					type="text"
				/>
				<button
					type="submit"
					className="bg-white/30 mt-3  rounded-sm w-36 hover:bg-white/40
                transition ease-out duration-300 py-1 text-white"
				>
					Save Changes
				</button>
			</form>
		</div>
	)
}

export default UserProfile
