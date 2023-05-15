import axios from "axios"

export const fetchJobs = () => {
	const token = localStorage.getItem("token")
	return axios.get("https://jobs-api-81wf.onrender.com/api/v1/jobs", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

const stats = async () => {
	const token = localStorage.getItem("token")
	try {
		const res = await fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export default stats
