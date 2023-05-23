import React from "react"

function JobInput({ name, handleChange, type, value, defaultValue, refi }) {
	return (
		<div className="relative">
			<input
				required
				defaultValue={defaultValue}
				ref={refi}
				name={name}
				id={name}
				value={value}
				type={type}
				className="mt-1 py-1 px-2 bg-white/20
        rounded-sm text-white w-full focus:outline-none"
				placeholder={name}
				onChange={handleChange}
			/>
			<div className="absolute w-full bg-white/50 h-[2px]"></div>
		</div>
	)
}

export default JobInput
