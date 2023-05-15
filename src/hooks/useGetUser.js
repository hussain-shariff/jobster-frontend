import axios from "axios"

export const fetchUser = async () => {
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

