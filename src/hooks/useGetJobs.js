import axios from "axios"
import { useQuery } from "react-query"

export const fetchJobs = () => {
	const token = localStorage.getItem("token")
	return axios.get("https://jobs-api-81wf.onrender.com/api/v1/jobs", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

export const getStats = () => {
	return useQuery("get-stats", fetchJobs, {
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
