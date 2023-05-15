import React from "react"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"
import { getStats } from "../hooks/useGetJobs"

const BarChartComp = () => {
	const { data } = getStats()
	return (
		<ResponsiveContainer max-width="75%" height={300}>
			<BarChart
				width={500}
				height={300}
				data={data.monthlyApplications}
				margin={{
					top: 10,
					left: -10,
					right: 30,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis allowDecimals={false} />
				<Tooltip />
				<Legend />
				<Bar dataKey="count" fill="#6520a4" barSize={90} />
			</BarChart>
		</ResponsiveContainer>
	)
}

export default BarChartComp
