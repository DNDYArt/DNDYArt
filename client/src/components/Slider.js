import "../main.css";
import React, { useContext } from "react";
import {
	Button,
	Grid,
	GridItem,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";
import { FeatureContext } from "../utils/FeatureContext";

function Slider() {
	const [size, setSize] = React.useState("xl");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const featureContext = useContext(FeatureContext);

	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				Look Ahead
			</Button>
			<Drawer
				size={size}
				isOpen={isOpen}
				placement="bottom"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader className="nexthead"></DrawerHeader>

					<DrawerBody>
						<div>
							<Grid
								className="nextSection"
								templateColumns="repeat(12)"
							>
								<GridItem colSpan={5}>
									<img
										src={
											featureContext.featureQue[0]
												.image ??
											"https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp"
										}
										alt="the mountain"
										className="nextPic"
									/>
								</GridItem>
								<GridItem className="next-box">
									<GridItem className="next-stuff">
										<h1 className="upNext">UP NEXT</h1>
										<h2 className="feature-artist">
											{featureContext?.featureQue[0]
												.authorFirstName +
												" " +
												featureContext?.featureQue[0]
													.authorLastName || ""}
										</h2>
										<div className="feature-name">
											<h3 className="feature-title">
												{featureContext?.featureQue[0]
													.name || ""}
											</h3>
											<p className="feature-year">
												(
												{featureContext?.featureQue[0]
													.year || "c. '05"}
												)
											</p>
										</div>
									</GridItem>
								</GridItem>
							</Grid>
						</div>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default Slider;
