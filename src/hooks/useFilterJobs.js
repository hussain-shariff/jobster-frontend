import axios from "axios"
import { useQuery } from "react-query"

const baseUrl = import.meta.env.VITE_API_URL

const fetchJobs = async (status, jobType, search, sort) => {
	const token = localStorage.getItem("token")
	return await axios.get(
		`${baseUrl}/jobs/filter?status=${status}&jobType=${jobType}&search=${search}&sort=${sort}`,
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
