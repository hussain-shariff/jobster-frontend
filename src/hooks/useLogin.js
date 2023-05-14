import { notifySuccess, notifyError } from "./useNotifications"
import axios from "axios"
import { useMutation } from "react-query"

const Login = async (credentials) => {
	return await axios.post(
		"https://jobs-api-81wf.onrender.com/api/v1/auth/login",
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
				navigate("/dashboard")
			}, 2000)
		},
		onError: () => notifyError("Invalid Email or password"),
	})
}
