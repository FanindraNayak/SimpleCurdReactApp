import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import Home from "./Components/Home/Home";
import LeftNav from "./Components/LeftNav/LeftNav";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Nav />
			<div className="AppMain">
				<LeftNav />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/addUser" element={<AddUser />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
