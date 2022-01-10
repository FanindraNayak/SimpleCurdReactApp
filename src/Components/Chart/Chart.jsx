import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import "./ChartStyle.css";
const data = [
	{
		name: "January",
		value: 4000,
	},
	{
		name: "Febuary",
		value: 3000,
	},
	{
		name: "March",
		value: 2000,
	},
	{
		name: "April",
		value: 2780,
	},
	{
		name: "May",
		value: 1890,
	},
	{
		name: "June",
		value: 2390,
	},
	{
		name: "July",
		value: 3490,
	},
	{
		name: "August",
		value: 1000,
	},
	{
		name: "September",
		value: 3490,
	},
	{
		name: "Octuber",
		value: 3490,
	},
	{
		name: "November",
		value: 2590,
	},
	{
		name: "December",
		value: 3290,
	},
];
const Chart = () => {
	return (
		<div className="Chart">
			<h1>User</h1>
			<div>
				<LineChart
					width={1150}
					height={250}
					data={data}
					margin={{
						top: 5,
						right: 20,
						left: 30,
						bottom: 2,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					{/* <YAxis /> */}
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="value"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</div>
		</div>
	);
};

export default Chart;
