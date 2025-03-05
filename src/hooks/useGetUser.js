import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

export const fetchUser = async () => {
	const token = localStorage.getItem("token")
	try {
		return await axios.get(
			`${baseUrl}/jobs/user`,
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

