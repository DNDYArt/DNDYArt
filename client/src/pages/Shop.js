import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Feature from "../components/images/abstract-3.jpg";

function Shop() {
	return (
		<>
			<main className="shop-main">
				{/* <!-- flex, row, col-12 --> */}
				<Grid className="shop-section" templateColumns="repeat(12)">
					{/* <!-- image / timer, col-5 --> */}
					<GridItem w="600px" className="shop-container" colSpan={5}>
						{/* <!-- col-5 --> */}
						<img
							src={Feature}
							className="feature-img"
							alt="abtract painting"
						/>
						<h3 className="timer">Time Left: </h3>
					</GridItem>
					<GridItem w="600px" className="shop-container" colSpan={5}>
						{/* <!-- col-5, align: center --> */}
						<GridItem className="feature-header" colSpan={5}>
							<h2 className="feature-artist">artist name</h2>
							<GridItem className="feature-name">
								{/* <!-- flex, row, align: baseline --> */}
								<h3 className="feature-title">title</h3>
								<p className="feature-year">year</p>
							</GridItem>
							<h4 className="feature-medium">medium</h4>
						</GridItem>
						<GridItem className="feature-about">
							<p className="para">About</p>
						</GridItem>
						<GridItem className="bid-info">
							<h4>The starting bid is:</h4>
							<h3>The curent bid is:</h3>
						</GridItem>
						<GridItem className="bid-btn">
							{/* <!-- add margin to match section height --> */}
							<button>Place Bid</button>
						</GridItem>
					</GridItem>
				</Grid>
			</main>
			{/* <!-- slider / sans-footer --> */}
			<footer className="slider">
				<article>
					<div>
						<img src="" alt="" />
						<div className="next-feature">
							{/* <!-- flex, justify: center, align: center --> */}
							<h1 className="upNext">UP NEXT</h1>
							<h2 className="feature-artist">Artist Name</h2>
							<div className="feature-name">
								{/* <!-- flex, row, align: baseline --> */}
								<h3 className="feature-title">title</h3>
								<p className="feature-year">year</p>
							</div>
							<h4 className="feature-medium">Medium</h4>
						</div>
					</div>
				</article>
			</footer>
		</>
	);
}

export default Shop;
