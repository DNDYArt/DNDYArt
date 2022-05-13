import { React, useState, useContext, useEffect } from "react";
import Slider from '../components/Slider';
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
import { FeatureContext } from "../utils/FeatureContext";

function Shop() {
	const context = useContext(UserContext)
	const featureContext = useContext(FeatureContext)
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
							src={featureContext.currentFeature.image}
							className="feature-img"
							alt="abtract painting"
						/>
						{/* add Countdown function, restart @ 48hrs, */}
            <GridItem colSpan={5} className="action-div">
						  <h3 className="timer">Time Left: {featureContext.autionTime} </h3>
            </GridItem>
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
									{featureContext.currentFeature.name}
								</h3>
								<p className="feature-year">({featureContext.currentFeature.year || 'c. \'05'})</p>
							</GridItem>
							<h4 className="feature-medium">Oil on canvas.</h4>
						</GridItem>
						<GridItem className="feature-about">
							<p className="para"><u>About the feature from the artist:</u></p>
							<br></br>
							<p className="para2">
								{featureContext.currentFeature.description}
							</p>
						</GridItem>
						<GridItem className="bid-info">
							<h4 className="bid-start">The starting bid {featureContext.currentFeature.startPrice !== featureContext.currentFeature.currentPrice ? 'was': 'is'}: <u>${featureContext.currentFeature.startPrice}</u> </h4>
							<h3 className="bid-current">The current bid is: {featureContext.currentFeature.currentPrice}</h3>
						</GridItem>
						<GridItem className="bid-form">
							{/* <!-- add margin to match section height --> */}
							{context.currentUser.loggedIn ? (
							<>	
							<FormControl isInvalid={isError}>
								<FormLabel htmlFor="amount">Amount</FormLabel>
								<NumberInput w='300px' min={0}>
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
              <GridItem w='240px' className="btn-box" />
							<Button onClick={Submit} className="bid-btn">Place Bid</Button>
							</>
							)
							: (<div className='notloggedmsg'>You must be logged in to place a bid.</div>)}
                 <Slider />
						</GridItem>
					</GridItem>
				</Grid>
			</main>
			{/* <!-- slider / sans-footer --> */}
			<footer className="slider">

			</footer>
		</>
	);
}

export default Shop;
