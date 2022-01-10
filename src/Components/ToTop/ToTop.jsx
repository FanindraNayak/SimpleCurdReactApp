import "./ToTopStyle.css";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const ToTop = ({ id }) => {
	console.log(id);
	return (
		<div className="ToTop">
			<a href={`#${id}`}>
				<ArrowUpwardIcon />
			</a>
		</div>
	);
};

export default ToTop;
