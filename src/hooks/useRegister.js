import { notifySuccess, notifyError } from "./useNotifications"
import axios from "axios"
import { useMutation } from "react-query"

const fetchApi = async (credentials) => {
	return await axios.post(
		"https://jobs-api-81wf.onrender.com/api/v1/auth/register",
		credentials
	)
}

export const registerUser = (navigate) => {
	return useMutation(fetchApi, {
		onSuccess: (data) => {
			notifySuccess("Registered successfully")
			localStorage.setItem("token", data.data.token)
			localStorage.setItem("user", data.data.user)
			setTimeout(() => {
				navigate("/stats")
			}, 2000)
		},
		onError: () => notifyError("Email already in use")
	})
}

