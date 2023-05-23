import axios from "axios"
import { useQuery } from "react-query"

const fetchApi = async (id) => {
	const token = localStorage.getItem("token")
	return await axios.get(
		`https://jobs-api-81wf.onrender.com/api/v1/jobs/${id}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}

export const getJob = (id, setjobInput) => {
	return useQuery(["get-job", id], () => fetchApi(id), {
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
