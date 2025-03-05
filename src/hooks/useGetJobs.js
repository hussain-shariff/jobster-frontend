import axios from "axios"
import { useQuery } from "react-query"

const baseUrl = import.meta.env.VITE_API_URL

export const fetchStats = () => {
	const token = localStorage.getItem("token")
	return axios.get(`${baseUrl}/jobs`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

export const getStats = () => {
	return useQuery("get-stats", fetchStats, {
		select: (data) => {
			let pending = 0,
				declined = 0,
				interview = 0
			data.data.jobs.forEach((job) => {
				if (job.status === "pending") {
					pending++
				} else if (job.status === "interview") {
					interview++
				} else {
					declined++
				}
			})
			return {
				pending,
				declined,
				interview,
				monthlyApplications: data.data.monthlyApplications,
			}
		},
	})
}
