import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar.jsx";
import Container from "./container.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx";

//Placeholder information for the Card component
const cardData = {
	cardTitle: "Card Title",
	cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	imgURL: "https://via.placeholder.com/500x350"
}

//Home component - assembles the homapes structure with different react components
const Home = () => {
	return (
		<div className="">
			<NavBar />
			<Container>
				<Jumbotron />
				<div className="row g-3">
					<Card data={cardData}></Card>
					<Card data={cardData}></Card>
					<Card data={cardData}></Card>
					<Card data={cardData}></Card>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default Home;
