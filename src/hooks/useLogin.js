import { notifySuccess, notifyError } from "./useNotifications"

const sendLoginData = async (email, password, setloading, navigate) =>{
    fetch('https://jobs-api-81wf.onrender.com/api/v1/auth/login', {
        method : "POST",
        headers : { 'content-type' : 'application/json'},
        body : JSON.stringify({
            email : email,
            password : password
        })
    })
        .then(res=> res.json())
        .then(json=> {
            notifySuccess('Sign in successfull')
            setloading(false)
            localStorage.setItem('user', json.user)
            localStorage.setItem('token', json.token)
            setTimeout(()=>{
                navigate('/dashboard')
            }, 2000)
        })
        .catch(err=> {
            setloading(false)
            notifyError('Invalid username or password')
        })
}

export default sendLoginData

