import React, { useState } from "react"
import JobInput from "../components/JobInput"
import Select from "react-select"
import "react-toastify/dist/ReactToastify.css"
import { useAppContext } from "../context"
import { notifyError } from "../hooks/useNotifications"
import { postJob } from "../hooks/useCreateJob"
import { statusOptions, jobTypeOptions } from "../searchOptions"

function AddJob() {
	const [jobInput, setjobInput] = useState({
		status: "pending",
		jobType: "full-time",
		company: "",
		position: "",
		location: "",
	})
	const { mutate, isLoading } = postJob()
	const { updateJob, state, clearValues } = useAppContext()
	const { isEditing, user } = state
	const selectStyles = {
		control: (baseStyles, state) => ({
			...baseStyles,
			backgroundColor: "rgb(255 255 255 / 0.2)",
			borderColor: "rgb(255 255 255 / 0.00001)",
		}),
		placeholder: (baseStyles, state) => ({
			...baseStyles,
			color: "rgb(255 255 255 / 0.5)",
		}),
	}

	const handleSearch = (e) => {
		const name = e.target.name
		const value = e.target.value
		setjobInput((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleStatus = (e) => {
		setjobInput((prev) => {
			return {
				...prev,
				status: e.value,
			}
		})
	}
	const handleJobType = (e) => {
		setjobInput((prev) => {
			return {
				...prev,
				jobType: e.value,
			}
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (user === "test user") {
			notifyError("test user ! read only.")
		} else if (isEditing) {
			updateJob()
			clearValues()
		} else {
			mutate(jobInput)
			setjobInput({
				status: "pending",
				jobType: "full-time",
				company: "",
				position: "",
				location: "",
			})
		}
	}

	return (
		<div className="px-12 md:px-20 mt-5">
			<form
				className="text-black p-10 bg-white/20 rounded-md mb-5"
				onSubmit={handleSubmit}
			>
				<h1 className=" text-white text-center text-2xl md:text-3xl">
					{isEditing ? "Edit Job" : "Add Job"}
				</h1>
				<div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-3 md:gap-y-7 mt-5">
					<JobInput
						name="company"
						handleChange={handleSearch}
						value={jobInput.company}
						type="text"
					/>
					<JobInput
						name="position"
						handleChange={handleSearch}
						value={jobInput.position}
						type="text"
					/>
					<JobInput
						name="location"
						handleChange={handleSearch}
						value={jobInput.location}
						type="text"
					/>
					<Select
						placeholder={"Status"}
						options={statusOptions}
						isClearable={false}
						isSearchable={false}
						onChange={handleStatus}
						styles={selectStyles}
					/>
					<Select
						placeholder={"Job Type"}
						options={jobTypeOptions}
						isClearable={false}
						isSearchable={false}
						onChange={handleJobType}
						styles={selectStyles}
					/>
					<div className="flex gap-5 mt-3 md:mt-0 ">
						<button
							type="submit"
							className="bg-white/30 rounded-md w-36 hover:bg-white/40
                transition ease-out duration-300 py-2 md:py-0 text-white"
						>
							Submit
						</button>
						<button
							type="button"
							className="bg-white/30 rounded-md w-36 hover:bg-white/40
                transition ease-out duration-300 py-2 md:py-0 text-white"
							onClick={() =>
								setjobInput({
									status: "pending",
									jobType: "full-time",
									company: "",
									position: "",
									location: "",
								})
							}
						>
							Clear
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default AddJob
