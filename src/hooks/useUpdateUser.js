import { notifySuccess } from "./useNotifications"

const useUpdateUser = async (username, lastname, location) =>{
    const token = localStorage.getItem('token')
    const data = {
        username : "hussain",
        lastname : "shariff",
        location : 'mysore'
    }
    const res = await fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs`, {
            method : "PATCH",
            headers : {
                'content-type' : 'application/json',
                Authorization : `Bearer ${token}` 
            },
            body : JSON.stringify(data)
        })
    notifySuccess('User Updated')
}

export default useUpdateUser