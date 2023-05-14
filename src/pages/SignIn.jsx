import React, { useState } from "react"
import { Link } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InputForm from "../components/InputForm"
import { loginUser } from "../hooks/useLogin"
import { useNavigate } from "react-router-dom"

function SignIn() {
	const navigate = useNavigate()
	const [formData, setformData] = useState({
		Email: "",
		Password: "",
	})
	const { mutate, isLoading } = loginUser(navigate)

	const handleSubmit = (demo) => {
		const creds = {
			email: demo ? "testUser@test.com" : formData.Email,
			password: demo ? "secret" : formData.Password,
		}
		mutate(creds)
		setformData({
			Email: "",
			Password: "",
		})
	}

	return (
		<div
			className="min-h-screen bg-[#070417] overflow-hidden
         relative"
		>
			<div
				className=" text-white w-80 flex flex-col gap-4 p-10 rounded-md
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl bg-white/30 z-40"
			>
				<h1 className="text-center text-white font-semibold text-3xl">
					Sign in to Jobster
				</h1>
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
					disabled={isLoading}
					type="button"
					onClick={() => handleSubmit(false)}
					className={`bg-white py-1 px-10 rounded-sm
            font-semibold hover:scale-105 transition ${
							isLoading && "cursor-not-allowed"
						} ease-out duration-500 w-full text-black`}
				>
					{!isLoading && <p>Sign in</p>}
					<ClipLoader
						color="#230e2e"
						loading={isLoading}
						size={20}
						className="ml-2 -mb-1"
					/>
				</button>
				{!isLoading && (
					<button
						type="button"
						className="bg-white py-1 px-10 rounded-sm font-semibold hover:scale-105 
            transition ease-out duration-500 w-full text-black"
						onClick={() => handleSubmit(true)}
					>
						Demo App
					</button>
				)}
				<p className="text-center">
					Need an account?
					<Link to={"/register"}>
						<span
							className="border-b ml-2 cursor-pointer hover:border-blue-600
                    transition ease-out duration-500"
						>
							Sign up
						</span>
					</Link>
				</p>
			</div>
			<ToastContainer />
			<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-72 h-72 bg-[#163a5b] blur-3xl"></div>
		</div>
	)
}

export default SignIn
