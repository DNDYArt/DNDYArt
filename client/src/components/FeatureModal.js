import React, {useState} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  FormControl,
  Button,
  useDisclosure,
  NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';


function FeatureModal(props) {
  const [uplImg, setUplImg] = useState('https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  function showUploadWidget(e) { 
    window.cloudinary.openUploadWidget(
      { 
        cloudName: "dndy", 
        uploadPreset: "kesipy46", 
        sources: ["local", "url"], 
        googleApiKey: "<image_search_google_api_key>", 
        showAdvancedOptions: false, 
        cropping: true, 
        multiple: false, 
        defaultSource: "local", 
        styles: 
        { 
          palette: { 
            window: "#FFFFFF", 
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF", 
            menuIcons: "#5A616A", 
            textDark: "#000000", 
            textLight: "#FFFFFF", 
            link: "#0078FF", 
            action: "#FF620C", 
            inactiveTabIcon: "#0E2F5A", 
            error: "#F44235", 
            inProgress: "#0078FF", 
            complete: "#20B832", 
            sourceBg: "#E4EBF1" }, 
        fonts: 
          { 
            default: 
            { 
              active: true 
            } 
          } 
        }},
      (err, info) => { if (!err) {
        console.log("Upload Widget event - ", info); 
        if (info.event === 'success') {
          sendURL(info.info.url)
        }
      }}); 
  }

  async function sendURL(imgUrl) {
    setUplImg(imgUrl)
  }

  async function handleSubmit(e) {
    if (uplImg !== 'https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp') {
      const _ = {
        'name': document.querySelector('#featureName').value,
        'authorFirstName': props.firstName,
        'authorLastName': props.lastName,
        'startPrice': document.querySelector('#featureStrtBid').value,
        'currentBid': document.querySelector('#featureStrtBid').value,
        'description': document.querySelector('#featurenDesc').value,
        'image': uplImg
      }
      const response = await fetch('http://localhost:3001/api/features',
      {
        method:'POST',
        body:JSON.stringify(_),
        headers: { 'Content-Type': 'application/json' }
      })
      setUplImg('https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp')
      props.insertFeature()
      onClose()
    } else {
      alert('Need to upload an image')
    }
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader className="modalTitle">Submit Your Feature</ModalHeader>
        <ModalCloseButton />
            <ModalBody pb={6}>

                <FormControl mt={4} onSubmit={() => console.log('lol')}>
                <FormLabel>Feature Image</FormLabel>
                <img src={uplImg || 'https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp'} />
                <button id='pfpic' onClick={showUploadWidget} style={{'border-radius': '5px', 'background-color': 'blue', 'color': 'white', 'margin': '2px'}}>Upload</button>
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Feature Title</FormLabel>
                <Input
                    id='featureName'
                    type='text'
                    placeholder='Title of your Feature'
                     />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Feature Description</FormLabel>
                <Input
                    id='featurenDesc'
                    type='text'
                    placeholder='Description of your Feature'
                     />
                </FormControl>

                <FormControl mt={4}>
                <FormLabel>Feature Starting Bid</FormLabel>
                <NumberInput w='300px' min={0}>
									<NumberInputField id="featureStrtBid" placeholder={5000} />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
								  </NumberInputStepper>
								</NumberInput>
                </FormControl>

                <ModalFooter>
                    <Button onClick={handleSubmit} colorScheme='blue' mr={3}>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalBody>

            
        </ModalContent>
    </Modal>

    <Button className='loginLink' onClick={onOpen} variant='link' style={{'width': '150px', 'height': '25px', 'backgroundColor': 'blue', 'color': 'white', 'marginTop': '25px'}}>Submit Feature</Button>
    </>
  )
}

export default FeatureModal;