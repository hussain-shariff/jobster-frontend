import axios from "axios"
import { useQuery } from "react-query"

const baseUrl = import.meta.env.VITE_API_URL

const fetchApi = async (id) => {
	const token = localStorage.getItem("token")
	return await axios.get(
		`${baseUrl}/jobs/${id}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}

export const getJob = (id, setjobInput) => {
	return useQuery(["get-job", id], () => fetchApi(id), {
		enabled: !!id,
		select: (data) => data.data,
		onSuccess: (data) => {
			setjobInput({
				status: data.status,
				jobType: data.jobType,
				company: data.company,
				position: data.position,
				location: data.location,
			})
		},
	})
}
