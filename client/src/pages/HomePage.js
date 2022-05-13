import React from "react";
import { useState, useEffect } from "react";
import {
	Parallax,
	useParallax,
	useParallaxController,
} from "react-scroll-parallax";
import {
	Container,
	Box,
	Image,
	Button,
	Heading,
	SlideFade,
	useDisclosure,
} from "@chakra-ui/react";

// Import Pictures
import Bust from "../components/images/greek-bust.png";
import Pink from "../components/images/pink.jpg";
import Berry from "../components/images/strawberry.jpg";
import Evening from "../components/images/evening-mountain.jpg";
import Abstract from "../components/images/abstract-1.jpg";

const HomePage = (props) => {
	const hero = {
		imageAlt: "Greco-Roman bust",
	};

  // funtion explore() {

  // }

	return (
		<>
			<main className="vh">
				{/* <!-- First --> */}
				<section className="container">
					{/* <!-- Main Title/Bust --> */}
					<Box className="hero" boxSize="lg">
						<img src={Bust} alt={hero.imageAlt} />
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
						<Button
              // onClick={explore}
							className="enter"
							colorScheme="black"
							variant="outline"
							size="lg"
							width="200px"
						>
							explore
						</Button>
					</Box>
				</section>
				{/* <!-- Second-Fourth --> */}
				<section className="feature-scroller">
					<Container styleConfig="margin-right: 0px;margin-left: 0px;" scrollaxis="vertical">
						<div className="par-box">
							<article>
								<Parallax className="home-img pink" speed={30}>
									<Image src={Pink} />
								</Parallax>
								<Parallax
									className="right-text"
									easing="easeOutQuad"
									translateX={["2px", "-200px"]}
									opacity={[0, 1.5]}
								>
									<Heading className="text-1">
										Art,<br></br>Curated.
									</Heading>
								</Parallax>
							</article>
							<article>
								<Parallax
									className="home-img berry"
									easing="easeOutQuad"
									speed={10}
								>
									<Image src={Berry} />
								</Parallax>
							</article>
							<article>
								<Parallax
									className="home-img mountain"
									speed={100}
								>
								<Parallax
									className="right-text"
									easing="easeOutQuad"
									opacity={[10, 0]}
								>
									<Heading className="text-2">
										Design,<br></br>Elevated.
									</Heading>
								</Parallax>
									<Image src={Evening} />
								</Parallax>
                </article>
                <article className="caboose">
								<Parallax
									className="home-img abstract"
									speed={25}
								>
									<Image src={Abstract} />
                  <Parallax easing="easeOutQuad" opacity={[2, 0]}>
									<Heading className="text-3">
										Color,<br></br>Invigorated.
									</Heading>
								</Parallax>
								</Parallax>
							</article>
						</div>
					</Container>
				</section>
			</main>
      <Footer />
		</>
	);
};

export default HomePage;
