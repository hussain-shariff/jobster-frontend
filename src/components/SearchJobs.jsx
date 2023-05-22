import React from "react"
import JobInput from "./JobInput"
import Select from "react-select"
import { statusOptions, sortOptions, jobTypeOptions } from "../searchOptions"

function SearchJobs({ handleFilters, clearFilters, searchValue }) {
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
		handleFilters(name, value)
	}

	const handleStatus = (e) => {
		handleFilters("status", e.value)
	}
	const handleJobType = (e) => {
		handleFilters("jobType", e.value)
	}
	const handleSort = (e) => {
		handleFilters("sort", e.value)
	}

	return (
		<div className="text-black p-10 bg-white/20 rounded-md mb-5">
			<h1 className=" text-white text-center text-2xl md:text-3xl">
				Search Jobs
			</h1>
			<div className="grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-3 md:gap-y-3 mt-5">
				<JobInput
					name="search"
					handleChange={handleSearch}
					value={searchValue}
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
					placeholder={"type"}
					options={jobTypeOptions}
					isClearable={false}
					isSearchable={false}
					onChange={handleJobType}
					styles={selectStyles}
				/>
				<Select
					placeholder={"sort"}
					options={sortOptions}
					isClearable={false}
					isSearchable={false}
					onChange={handleSort}
					styles={selectStyles}
				/>
				<button
					className="bg-white/30 rounded-md w-36 hover:bg-white/40
            transition ease-out duration-300 py-2 md:py-0 text-white"
					onClick={() => clearFilters()}
				>
					Clear filters
				</button>
			</div>
		</div>
	)
}

export default SearchJobs
