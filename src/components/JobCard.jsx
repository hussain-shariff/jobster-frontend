import React from "react"
import {
	faLocationDot,
	faBriefcase,
	faCalendarDays,
	faClock,
	faBan,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"
import JobItem from "./JobItem"
import moment from "moment"
import { useAppContext } from "../context"
import { notifyError } from "../hooks/useNotifications"
import deleteJob from "../hooks/useDelete"
import { Link } from "react-router-dom"

function JobCard({ jobDetails }) {
	const { mutate } = deleteJob()
	const { editJob, state } = useAppContext()
	const { user } = state
	let icon
	if (jobDetails.status.toLowerCase() === "pending") {
		icon = faClock
	} else if (jobDetails.status.toLowerCase() === "declined") {
		icon = faBan
	} else {
		icon = faPaperPlane
	}
	let date = moment(jobDetails.createdAt)
	date = date.format("MMM Do, YYYY")

	const handleDelete = () => {
		if (user === "test user") {
			notifyError("test user! read only")
		} else {
			mutate(jobDetails._id)
		}
	}

	return (
		<div
			className="bg-white/20 backdrop-blur-3xl p-5 rounded-md
    hover:scale-105 cursor-pointer transition ease-out duration-500 relative"
		>
			<div
				className={`absolute w-full h-[1.5px] bg-gradient-to-r via-[#8d53de] top-0 left-0 rounded-l-md`}
			></div>
			<div
				className={`absolute w-full h-[1.5px] bg-gradient-to-l via-[#8d53de] bottom-0 left-0 rounded-l-md`}
			></div>
			<div className="flex items-center gap-5 border-b-[2px] border-gray-500 pb-5">
				<div
					className="w-12 h-12 bg-gradient-to-br from-purple-500 rounded-full text-white flex items-center
            justify-center text-2xl font-semibold uppercase"
				>
					{jobDetails.company[0]}
				</div>
				<div className="text-white text-lg">
					<h1>{jobDetails.position}</h1>
					<p>{jobDetails.company}</p>
				</div>
			</div>
			<div className="grid gap-1 grid-cols-2 md:gap-0 p-3 text-gray-400">
				<div className="flex flex-col gap-1">
					<JobItem icon={faLocationDot} name={jobDetails.location} />
					<JobItem icon={faBriefcase} name={jobDetails.jobType} />
				</div>
				<div className="">
					<JobItem icon={faCalendarDays} name={date} />
					<JobItem icon={icon} name={jobDetails.status} />
				</div>
			</div>
			<div className="ml-2">
				<Link to={`/editJob/${jobDetails._id}`}>
					<button
						className="border-gray-400 border-2 px-2 text-gray-400 rounded-md mr-3
            hover:text-purple-300 hover:border-purple-300"
					>
						Edit
					</button>
				</Link>

				<button
					className="border-gray-400 border-2 px-2 text-gray-400 rounded-md
            hover:text-purple-300 hover:border-purple-300"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default JobCard
