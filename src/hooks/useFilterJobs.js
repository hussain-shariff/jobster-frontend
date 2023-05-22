import axios from "axios"
import { useQuery } from "react-query"

const fetchJobs = async (status, jobType, search, sort) => {
	const token = localStorage.getItem("token")
	return await axios.get(
		`https://jobs-api-81wf.onrender.com/api/v1/jobs/filter?status=${status}&jobType=${jobType}&search=${search}&sort=${sort}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}

export const getJobs = (status, jobType, search, sort) => {
	return useQuery(["get-jobs", status, jobType, search, sort], () =>
		fetchJobs(status, jobType, search, sort)
	)
}
