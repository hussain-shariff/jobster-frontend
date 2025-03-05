import { notifySuccess } from "./useNotifications"
import axios from "axios"
import { useMutation } from "react-query"

const baseUrl = import.meta.env.VITE_API_URL

const fetchApi = async (data) => {
    const token = localStorage.getItem("token")
	return await axios.post(
        `${baseUrl}/jobs`, data, {
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

