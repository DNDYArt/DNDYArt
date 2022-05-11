import { useState, useEffect } from "react";
import { Parallax } from 'react-scroll-parallax'
import { Container, Box, Image, Button, Heading } from "@chakra-ui/react";

// Import Pictures
import Bust from '../components/images/greek-bust.png'
import Pink from '../components/images/pink.jpg'
import Berry from '../components/images/strawberry.jpg'
import Evening from '../components/images/evening-mountain.jpg'
import Abstract from '../components/images/abstract-1.jpg'


const HomePage = (props) => {
	const hero = {
		imageAlt: "Greco-Roman bust"
	};

	return (
		<>
			<main>
				{/* <!-- First --> */}
				<section className="container">
					{/* <!-- Main Title/Bust --> */}
					<Box className="hero" boxSize="lg">
						<img src={Bust} alt={hero.imageAlt} />
            <Heading className='h1 hero-head' as='h1'>DNDY</Heading>
					</Box>
					{/* <!-- Statement/Enter --> */}
					<Box className="welcome">
						<Heading className='h2' as='h2' size='xl' >Art should be shared, <br></br>
                never contained.</Heading>
						<Button className="enter" colorScheme='black' variant='outline' size='lg' width='200px'>explore</Button>
					</Box>
				</section>
        {/* <!-- Second-Fourth --> */}
        <section className="feature-scroller">
        <Container scrollaxis="vertical">
      <div>
        <Parallax className="home-img pink" speed={10}>
          <Image src={Pink} />
        </Parallax>
        <Parallax className="home-img berry" speed={-10}>
          <Image src={Berry} />
        </Parallax>
        <Parallax className="home-img mountain" speed={5}>
          <Image src={Evening} />
        </Parallax>
        <Parallax className="home-img abstract" speed={-5}>
          <Image src={Abstract} />
        </Parallax>
      </div>
    </Container>
        </section>
			</main>
		</>
	);
};

export default HomePage;