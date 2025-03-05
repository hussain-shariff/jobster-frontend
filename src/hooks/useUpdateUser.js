import { notifySuccess } from "./useNotifications"
import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

const fetchApi = (data) => {
    const token = localStorage.getItem('token')
    return axios.patch('${baseUrl}/jobs', data, {
        headers : {
            Authorization : `Bearer ${token}` 
        }
    })
}

const useUpdateUser = async (username, lastname, location) =>{
    const token = localStorage.getItem('token')
    const data = {
        username ,
        lastname ,
        location
    }
    const res = await fetch(`${baseUrl}/jobs`, {
            method : "PATCH",
            headers : {
                'content-type' : 'application/json',
                Authorization : `Bearer ${token}` 
            },
            body : JSON.stringify(data)
        })
    notifySuccess('User Updated')
}

export const updateUser = ()=>{
    const queryClient = useQueryClient()
    return useMutation(fetchApi, {
        onSuccess : (data) => {
            notifySuccess('User Updated')
            queryClient.invalidateQueries('get-user')
        }
    })
}

export default useUpdateUser