import "./AddUserStyle.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	// padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const AddUser = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		occupation: "",
		age: 0,
	});
	const handelChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	return (
		<div className="AddUser">
			<h1>Add User</h1>
			<div className="AddUserForm">
				<Box
					component="form"
					sx={{ width: "80%", maxWidth: "100%" }}
					noValidate
					// autoComplete="off"
				>
					<Stack spacing={4}>
						<Item>
							<TextField
								fullWidth
								id="name"
								label="Name"
								name="name"
								variant="outlined"
								value={data.name}
								onChange={(e) => handelChange(e)}
							/>
						</Item>
						<TextField
							fullWidth
							id="email"
							label="Email"
							name="email"
							variant="outlined"
							value={data.email}
							onChange={(e) => handelChange(e)}
						/>
						<TextField
							fullWidth
							id="phone"
							label="Phone Number"
							name="phone"
							variant="outlined"
							value={data.phone}
							onChange={(e) => handelChange(e)}
						/>
						<TextField
							fullWidth
							id="occupation"
							label="Occupation"
							name="occupation"
							variant="outlined"
							value={data.occupation}
							onChange={(e) => handelChange(e)}
						/>
						<TextField
							fullWidth
							id="age"
							label="Age"
							name="age"
							type="number"
							variant="outlined"
							value={data.age}
							onChange={(e) => handelChange(e)}
						/>
					</Stack>
					<div className="AddUserButton">
						<Button
							variant="outlined"
							onClick={() => {
								console.log(data);
							}}
						>
							Submit
						</Button>
					</div>
				</Box>
			</div>
		</div>
	);
};

export default AddUser;
