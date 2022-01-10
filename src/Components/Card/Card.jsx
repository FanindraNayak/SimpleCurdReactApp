import React from "react";
import "./CardStyle.css";

const Card = ({ image, name, email }) => {
	return (
		<div className="Card">
			<img src={image} alt="Name" />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
