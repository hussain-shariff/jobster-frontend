import { notifySuccess } from "./useNotifications"

const useCreateJob = async (jobDetails, token) =>{
    const {company, position, status, location, jobType} = jobDetails

    fetch('https://jobs-api-81wf.onrender.com/api/v1/jobs', {
        method : "POST",
        headers : { 
            Authorization : `Bearer ${token}`
        },
        body : JSON.stringify({
            company: 'foaisf',
            position : 'dfasfasf',
            status : 'pending',
            location : 'fuaisgif',
            jobType : 'internship'
        })
    })
        .then(res=> res.json())
        .then(json=> {
            // notifySuccess('Job created')
            console.log(json);
        })
        .catch(err=> {
            console.log(err);
        })
}

export default useCreateJob