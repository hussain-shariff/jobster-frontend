import React, { useState } from "react"
import { Link } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InputForm from "../components/InputForm"
import { registerUser } from "../hooks/useRegister"
import { loginUser } from "../hooks/useLogin"
import { useNavigate } from "react-router-dom"
import { notifySuccess } from "../hooks/useNotifications"

function Register() {
	const navigate = useNavigate()
	const { mutate: demoMutate, isLoading: demoLoading } = loginUser()
	const { mutate: registerMutate, isLoading: registerLoading } = registerUser(navigate)
	const [formData, setformData] = useState({
		Username: "",
		Email: "",
		Password: "",
	})

	const handleSubmit = (demo) => {
		const creds = {
			username: demo ? "demo" : formData.Username,
			email: demo ? import.meta.env.VITE_DEMO_EMAIL : formData.Email,
			password: demo ? import.meta.env.VITE_DEMO_PASSWORD : formData.Password,
		}
		demo ? demoMutate(creds, {
			onSuccess: (data) => {
				notifySuccess("Signnnnn in successfull")
				localStorage.setItem("user", data.data.user)
				localStorage.setItem("token", data.data.token)
				setTimeout(() => {
					navigate("/stats")
				}, 2000)
			}
		}) : registerMutate(creds)
		setformData({
			Username: "",
			Email: "",
			Password: "",
		})
	}

	return (
		<div className="h-screen relative bg-[#070417]" onSubmit={handleSubmit}>
			<div
				className=" text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4
            flex flex-col bg-white/30 z-30 backdrop-blur-3xl p-10 rounded-md w-[340px]"
			>
				<h1 className="text-center font-semibold text-3xl z-40">
					Sign up for Jobster
				</h1>
				<InputForm
					name="Username"
					type="text"
					value={formData.Username}
					autoComplete=""
					setformData={setformData}
				/>
				<InputForm
					name="Email"
					type="email"
					value={formData.Email}
					autoComplete="email"
					setformData={setformData}
				/>
				<InputForm
					name="Password"
					type="password"
					value={formData.Password}
					autoComplete="new-password"
					setformData={setformData}
				/>
				<button
					disabled={demoLoading|| registerLoading}
					className={`bg-white py-1 rounded-sm 
            font-semibold hover:scale-105 ${
							(demoLoading || registerLoading) && "cursor-not-allowed"
						} transition ease-out duration-500 w-full text-[#070417]`}
					type="button"
					onClick={() => handleSubmit(false)}
				>
					{!demoLoading && <p>Complete Sign Up</p>}
					<ClipLoader
						color="#230e2e"
						loading={demoLoading}
						size={20}
						className="ml-2 -mb-1"
					/>
				</button>
				{!demoLoading && (
					<button
						onClick={() => handleSubmit(true)}
						className="bg-white py-1 rounded-sm 
            font-semibold hover:scale-105 transition ease-out duration-500 w-full text-[#070417]"
						type="button"
					>
						Demo App
					</button>
				)}
				<p className="text-center">
					Already have an account?
					<Link to={"/signIn"}>
						<span
							className="border-b ml-2 cursor-pointer hover:border-blue-600
                    transition ease-out duration-500"
						>
							Sign in
						</span>
					</Link>
				</p>
			</div>
			<ToastContainer />
			<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-72 h-72 bg-[#224668] blur-3xl"></div>
		</div>
	)
}

export default Register
