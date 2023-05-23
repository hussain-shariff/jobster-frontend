import { notifySuccess } from "./useNotifications"
import axios from "axios"
import { useMutation } from "react-query"

const fetchApi = async (data) => {
    const token = localStorage.getItem("token")
	return await axios.post(
		`https://jobs-api-81wf.onrender.com/api/v1/jobs`, data, {
            headers :{
                Authorization: `Bearer ${token}`
            }
        },
	)
}

export const postJob = () =>{
    return useMutation(fetchApi, {
        onSuccess : data=> {
			console.log(data.data)
			notifySuccess("Job created")
		}
    })
}

