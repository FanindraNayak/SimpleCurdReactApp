import "./LeftNavStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";
const LeftNav = () => {
	return (
		<div className="LeftNav">
			<ul>
				<li>
					<Link className="LeftNavText" to="/">
						{" "}
						<HomeIcon />
						<p>Home</p>
					</Link>
				</li>
				<li style={{ textDecoration: "none" }}>
					<Link className="LeftNavText" to="/addUser">
						{" "}
						<PersonAddIcon />
						<p style={{ textDecoration: "none" }}>Add Users</p>
					</Link>
				</li>
				<li>
					{" "}
					<Link className="LeftNavText" to="/addUser">
						<PersonIcon />
						<p>View Users</p>
					</Link>
				</li>
				<li>
					<Link className="LeftNavText" to="/addUser">
						{" "}
						<TimelineIcon />
						<p>User Charts</p>
					</Link>
				</li>
				<li>
					<Link className="LeftNavText" to="/addUser">
						{" "}
						<ContactPageIcon />
						<p>Contact</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default LeftNav;
