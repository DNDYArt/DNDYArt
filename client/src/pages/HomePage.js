import React from "react";
import { useState, useEffect, useContext } from "react";
import ParaScroller from "../components/ParaScroller";
import {
	Box,
	Button,
	Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { UserContext } from "../utils/UserContext";

// Import Pictures
import Bust from "../components/images/greek-bust.png";

const HomePage = (props) => {
	const context = useContext(UserContext);

	const hero = {
		imageAlt: "Greco-Roman bust",
	};

	return (
		<>
			<main className="vh">
				{/* <!-- First --> */}
				<section className="container">
					{/* <!-- Main Title/Bust --> */}
					<Box className="hero" boxSize="lg">
						<img src={Bust} alt={hero.imageAlt} className="bust" />
						<Heading className="h1 hero-head" as="h1">
							DNDY
						</Heading>
					</Box>
					{/* <!-- Statement/Enter --> */}
					<Box className="welcome">
						<Heading className="h2" as="h2" size="xl">
							Art should be shared, <br></br>
							never contained.
						</Heading>
						{/* <Button
                            className="enter"
                            colorScheme="black"
                            variant="outline"
                            size="lg"
                            width="200px"
                        > */}
						<Link
							to={
								context.currentUser.loggedIn
									? "/shop"
									: "/collectors"
							}
						/>
						<Link
							to={
								context.currentUser.loggedIn
									? "/shop"
									: "/collectors"
							}
						>
							<Button
								className="enter recent"
								colorScheme="black"
								variant="outline"
								size="lg"
								width="200px"
							>
								explore
							</Button>
						</Link>
						{/* </Button> */}
						<Button
							className="enter recent"
							colorScheme="black"
							variant="outline"
							size="lg"
							width="200px"
						>
							<Link to={"artistgallery"}>recent</Link>
						</Button>
					</Box>
				</section>
				{/* <!-- Second-Fourth --> */}
				<section className="feature-scroller">
					<ParaScroller />
				</section>
			</main>
		</>
	);
};

export default HomePage;
