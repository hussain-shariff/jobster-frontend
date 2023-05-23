import { notifySuccess, notifyError } from "../hooks/useNotifications"
import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

const fetchApi = async (id) => {
    const token = localStorage.getItem("token")
	return await axios.delete(`https://jobs-api-81wf.onrender.com/api/v1/jobs/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

const deleteJob = ()=>{
    const queryClient  = useQueryClient()
    return useMutation(fetchApi, {
        onSuccess : data =>{
            notifySuccess('Job Deleted')
            queryClient.invalidateQueries(["get-jobs","all","all","","a-z"])
        },
        onError : err =>{
            notifyError('Try again')
        }
    })
}

export default deleteJob
