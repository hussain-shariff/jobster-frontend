import { notifySuccess } from "./useNotifications"
import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

const fetchApi = async ({data, id}) => {
	const token = localStorage.getItem("token")
	return await axios.patch(
		`https://jobs-api-81wf.onrender.com/api/v1/jobs/${id}`,
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
