const getCurrentUser = async () =>{
    const token = localStorage.getItem('token')
    try {
        const res = await fetch('https://jobs-api-81wf.onrender.com/api/v1/jobs/user', {
            method : "GET",
            headers : {
                Authorization : `Bearer ${token}` 
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default getCurrentUser