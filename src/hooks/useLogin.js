import { notifySuccess, notifyError } from "./useNotifications"
import axios from "axios"
import { useMutation } from "react-query"

const baseUrl = import.meta.env.VITE_API_URL

const Login = async (credentials) => {
	return await axios.post(
		`${baseUrl}/auth/login`,
		credentials
	)
}
export const loginUser = (navigate) => {
	return useMutation(Login, {
		onSuccess: (data) => {
			notifySuccess("Sign in successfull")
			localStorage.setItem("user", data.data.user)
			localStorage.setItem("token", data.data.token)
			setTimeout(() => {
				navigate("/stats")
			}, 2000)
		},
		onError: () => notifyError("Invalid Email or password"),
	})
}
