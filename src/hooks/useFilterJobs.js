import axios from "axios"
import { useQuery } from "react-query"

const fetchJobs = async (status, jobType, search, sort) => {
	const token = localStorage.getItem("token")
	const searchParams = search !== undefined ? `search=${search}` : ''
	return await axios.get(
		`https://jobs-api-81wf.onrender.com/api/v1/jobs/filter?status=${
			status || "all"
		}&jobType=${jobType || "all"}&${searchParams}&sort=${sort || "a-z"}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}

export const getJobs = (status, jobType, search, sort) => {
	return useQuery("get-jobs", () => fetchJobs(status, jobType, search, sort))
}
