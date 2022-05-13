import "../main.css";
import React from "react";
import nextFeature from "./images/mountain-bw.jpg";
import {
	Button,
  extendTheme,
	Grid,
	GridItem,
	Input,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";

function Slider() {
	const [size, setSize] = React.useState("xl");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

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
										src={nextFeature}
										alt="the mountain"
										className="nextPic"
									/>
								</GridItem>
								<GridItem className="next-box">
                  <GridItem className="next-stuff">
									<h1 className="upNext">UP NEXT</h1>
									<h2 className="feature-artist">
										Oleg Prachuk
									</h2>
									<div className="feature-name">
										<h3 className="feature-title">the mountain</h3>
										<p className="feature-year">2018</p>
									</div>
									<h4 className="feature-medium">Kodak TRI-X 400</h4>
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
