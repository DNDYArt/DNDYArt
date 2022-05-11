import { useState, useEffect } from "react";
import { Parallax } from 'react-scroll-parallax'
import { Container, Box, Image, Button, Heading } from "@chakra-ui/react";
import Img from '../components/greek-bust.png'

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
						<img src={Img} alt={hero.imageAlt} />
            <Heading className='h1 hero-head' as='h1'>DNDY</Heading>
					</Box>
					{/* <!-- Statement/Enter --> */}
					<Box className="welcome">
						<Heading className='h2' as='h2' size='xl' >Art should be shared, <br></br>
                never contained.</Heading>
						<Button className="enter" colorScheme='black' variant='outline' size='lg'>explore</Button>
					</Box>
				</section>
        {/* <!-- Second-Fourth --> */}
        <section>
        <Container scrollAxis="vertical">
      <div>
        <Parallax speed={10}>
          <Image src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
        </Parallax>
        <Parallax speed={-10}>
          <Image src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
        </Parallax>
        <Parallax speed={5}>
          <Image src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
        </Parallax>
        <Parallax speed={-5}>
          <Image src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
        </Parallax>
        <Parallax speed={3}>
          <Image src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
        </Parallax>
        <Parallax speed={6}>
          <Image src='https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg' />
        </Parallax>
      </div>
    </Container>
        </section>
			</main>
		</>
	);
};

export default HomePage;