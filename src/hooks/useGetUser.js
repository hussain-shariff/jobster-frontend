import axios from "axios"
import { useQuery } from "react-query"


const fetchApi = async () => {
	const token = localStorage.getItem("token")
	try {
		return await axios.get(
			"https://jobs-api-81wf.onrender.com/api/v1/jobs/user",
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
	} catch (error) {
        console.log(error);
    }
}

export const getCurrUser = (getUser)=>{
    return useQuery('get-user', fetchApi, {
        onSuccess : (data)=> getUser(data.data)
    })
}

