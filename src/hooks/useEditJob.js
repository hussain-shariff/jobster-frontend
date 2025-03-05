import { notifySuccess } from "./useNotifications"
import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

const baseUrl = import.meta.env.VITE_API_URL

const fetchApi = async ({data, id}) => {
	const token = localStorage.getItem("token")
	return await axios.patch(
		`${baseUrl}/jobs/${id}`,
		data,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}

const useEditJob = () => {
	const queryClient = useQueryClient()
	return useMutation(fetchApi, {
		onSuccess: (data) => {
			notifySuccess("Job Edited")
			queryClient.invalidateQueries(["get-jobs", "all", "all", "", "a-z"])
		},
	})
}

export default useEditJob
