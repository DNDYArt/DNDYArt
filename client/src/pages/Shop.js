import { React, useContext, useState } from "react";
import {
	Grid,
	GridItem,
	Button,
	FormControl,
	FormLabel,
	FormHelperText,
	FormErrorMessage,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
import Feature from "../components/images/abstract-3.jpg";
import { UserContext } from "../utils/UserContext";

function Shop() {
	const context = useContext(UserContext)
	const [input, setInput] = useState("");

	const handleInputChange = (e) => setInput(e.target.value);
  
  const isError = input === "";
  
  function Submit() {
    if(NumberInput > 12000) {
      handleInputChange();
    } else {
      return isError;
    }
  }

	return (
		<>
			<main className="shop-main">
				<Grid className="shop-section" templateColumns="repeat(12)">
					<GridItem w="600px" className="shop-container" colSpan={5}>
						<img
							src={Feature}
							className="feature-img"
							alt="abtract painting"
						/>
						{/* add Countdown function, restart @ 48hrs, */}
						<h3 className="timer">Time Left: </h3>
					</GridItem>
					<GridItem
						w="600px"
						className="shop-description"
						colSpan={5}
					>
						<GridItem className="feature-header" colSpan={5}>
							{/* Add Artist Name from ArtistDB */}
							<h2 className="feature-artist">Steve Johnson</h2>
							<GridItem className="feature-name">
								{/* Add Feature Name from FeatureDB */}
								{/* <!-- flex, row, align: baseline --> */}
								<h3 className="feature-title">
									the long hallway
								</h3>
								<p className="feature-year">(2014)</p>
							</GridItem>
							<h4 className="feature-medium">Oil on canvas.</h4>
						</GridItem>
						<GridItem className="feature-about">
							<p className="para">About the feature from the artist:</p>
							<br></br>
							<p className="para2">
								Life, uh, finds a way. This thing comes<br></br>
								fully loaded: AM/FM radio, reclining bucket
								seats,<br></br>
								and… power windows.
							</p>
						</GridItem>
						<GridItem className="bid-info">
							<h4 className="bid-start">The starting bid is:</h4>
							<h3 className="bid-current">The current bid is:</h3>
						</GridItem>
						<GridItem className="bid-form">
							{/* <!-- add margin to match section height --> */}
							{context.currentUser.loggedIn ? (
							<>
							<FormControl isInvalid={isError}>
								<FormLabel htmlFor="amount">Amount</FormLabel>
								<NumberInput min={0}>
									<NumberInputField id="amount" />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								{!isError ? (
									<FormHelperText>
										Enter the amount you wish to bid on this
										feature.
									</FormHelperText>
								) : (
									<FormErrorMessage>
										A bid amount is required.
									</FormErrorMessage>
								)}
							</FormControl>
							<Button onClick={Submit} className="bid-btn">Place Bid</Button>
							</>)
							: (<div className='notloggedmsg'>You must be logged in to place a bid.</div>)}
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
