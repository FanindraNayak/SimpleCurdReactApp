import "./HomeStyle.css";
import React from "react";
import LoremData from "../LoremData/LoremData";
import ToTop from "../ToTop/ToTop";
import Card from "../Card/Card";
import BingImageOfTheDay from "../../BingImageOfTheDay.jpg";
import Chart from "../Chart/Chart";
const Home = () => {
	return (
		<div className="Home" id="HomeComponent">
			<h1>Few Users</h1>
			<div className="HomeUsers">
				<Card image={BingImageOfTheDay} name="sam" email="email" />
				<Card image={BingImageOfTheDay} name="sam" email="email" />
				<Card image={BingImageOfTheDay} name="sam" email="email" />
				<Card image={BingImageOfTheDay} name="sam" email="email" />
			</div>
			<div className="HomeChart">
				<Chart />
			</div>
			<ToTop id="HomeComponent" />
		</div>
	);
};

export default Home;
