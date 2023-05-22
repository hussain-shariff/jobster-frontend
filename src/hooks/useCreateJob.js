import { notifySuccess } from "./useNotifications"
import axios from "axios"
import { useMutation } from "react-query"

const fetchApi = async (data) => {
    const dat = {
        company : 'test',
		position : 'test',
		location : 'test',
		jobType : 'full-time',
		status : 'pending'
    }
	return await axios.post(
		`https://jobs-api-81wf.onrender.com/api/v1/jobs`,
		dat
	)
}

const useCreateJob = async (company, position, location, jobType, status) => {
	const token = localStorage.getItem("token")
	const data = {
		company,
		position,
		location,
		jobType,
		status,
	}
	const res = await fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})
	notifySuccess("Job created")
}

export const createJob = () =>{
    return useMutation(fetchApi, {
        onSuccess : data=> console.log(data.data)
    })
}

export default useCreateJob
