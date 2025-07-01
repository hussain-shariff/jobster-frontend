import { notifyError } from "./useNotifications"
import axios from "axios"
import { useMutation } from "react-query"

const baseUrl = import.meta.env.VITE_API_URL

const Login = async (credentials) => {
	return await axios.post(
		`${baseUrl}/auth/login`,
		credentials
	)
}
export const loginUser = () => {
	return useMutation(Login, {
		onError: () => notifyError("Invalid Email or password"),
	})
}
