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
            notifySuccess('Registered successfully')
            localStorage.setItem('token', json.token)
            localStorage.setItem('user', json.user)
            setTimeout(()=>{
                navigate('/dashboard')
            }, 2000)
        })
        .catch(err=> {
            notifyError('Email already in use')
            setloading(false)
        })
}

export default sendRegisterData