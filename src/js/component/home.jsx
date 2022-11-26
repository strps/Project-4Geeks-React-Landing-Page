import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar.jsx";
import Container from "./container.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Container>
				<Jumbotron/>
				<Card></Card>
			</Container>
			<Footer/>
		</div>
	);
};

export default Home;
