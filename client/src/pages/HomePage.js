import { useState, useEffect, Container } from "react";
import { Box, Image, Button, Heading } from "@chakra-ui/react";
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
      <div className={styles.images}>
        <Parallax speed={4} className={styles.parallaxImage}>
          <Image src={imageFile1} />
        </Parallax>
        <Parallax speed={-4} className={styles.parallaxImage}>
          <Image src={imageFile2} />
        </Parallax>
        <Parallax speed={4} className={styles.parallaxImage2}>
          <Image src={imageFile4} />
        </Parallax>
        <Parallax speed={-3} className={styles.parallaxImage}>
          <Image src={imageFile5} />
        </Parallax>
        <Parallax speed={3} className={styles.parallaxImage}>
          <Image src={imageFile3} />
        </Parallax>
        <Parallax speed={6} className={styles.parallaxImage2}>
          <Image src={imageFile6} />
        </Parallax>
      </div>
    </Container>
        </section>
			</main>
		</>
	);
};

export default HomePage;
