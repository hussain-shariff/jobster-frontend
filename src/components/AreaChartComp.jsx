import React from "react"
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts"
import { getStats } from "../hooks/useGetJobs"

const AreaChartComp = () => {
	const { data } = getStats()

	return (
		<ResponsiveContainer width="100%" height={300}>
			<AreaChart
				width={500}
				height={400}
				data={data.monthlyApplications}
				margin={{
					top: 10,
					right: 30,
					left: -10,
				}}
			>
				<CartesianGrid strokeDasharray="3 3 " />
				<XAxis dataKey="date" />
				<YAxis allowDecimals={false} />
				<Tooltip />
				<Area type="monotone" dataKey="count" stroke="#6520a4" fill="#6520a4" />
			</AreaChart>
		</ResponsiveContainer>
	)
}

export default AreaChartComp
