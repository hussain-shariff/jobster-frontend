const getAllJobs = async (setjobs) =>{
    const token = localStorage.getItem('token')
    fetch('https://jobs-api-81wf.onrender.com/api/v1/jobs', {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}` 
        }
    })
        .then(res=> res.json())
        .then(json=> setjobs(json.jobs))
        .catch(err=> console.log(err))
}

export default getAllJobs