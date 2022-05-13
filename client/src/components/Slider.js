import '../main.css';
import React from 'react';
import {
    Button,
    Input, 
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';

  function Slider() {
    const [size, setSize] = React.useState('xl')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Look Ahead
        </Button>
        <Drawer
          size={size}
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader className='nexthead'></DrawerHeader>
  
            <DrawerBody>
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
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Slider;