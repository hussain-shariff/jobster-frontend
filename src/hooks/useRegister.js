import { notifySuccess, notifyError } from "./useNotifications"

const sendRegisterData = async (name, email, password, setloading, navigate) =>{
    fetch('https://jobs-api-81wf.onrender.com/api/v1/auth/register', {
        method : "POST",
        headers : { 'content-type' : 'application/json'},
        body : JSON.stringify({
            username : name,
            email : email,
            password : password
        })
    })
        .then(res=> res.json())
        .then(json=> {
            setloading(false)
            localStorage.setItem('token', json.token)
            localStorage.setItem('user', json.user)
            notifySuccess('Registered successfully')
            navigate('/dashboard')
        })
        .catch(err=> {
            notifyError('Email already in use')
            setloading(false)
        })
}

export default sendRegisterData