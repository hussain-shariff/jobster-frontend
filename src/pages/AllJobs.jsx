import React, { useEffect } from "react"
import JobCard from "../components/JobCard"
import SearchJobs from "../components/SearchJobs"
import { getJobs } from "../hooks/useFilterJobs"

function AllJobs() {
	const { data, isLoading } = getJobs("", "", "", "")

	if (isLoading) return <h1 className="text-white text-3xl font-bold ml-20">Loading...</h1>

	return (
		<div className="mt-4 px-10 mx-auto md:px-20">
			<SearchJobs />
			<h1 className="text-white text-2xl font-semibold">
				{data.data.length} Jobs Found
			</h1>
			{data.data && (
				<div className="grid grid-cols-1 pb-6 mt-5 md:grid-cols-3 gap-x-5 gap-y-10">
					{data.data.map((job) => (
						<JobCard key={job._id} jobDetails={job} />
					))}
				</div>
			)}
		</div>
	)
}

export default AllJobs
