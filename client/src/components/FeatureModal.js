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
} from '@chakra-ui/react'


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
                    id='featurenName'
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
                <Input
                    id='featurenStrtBid'
                    type='number'
                    placeholder='($5000)'
                     />
                </FormControl>

                <ModalFooter>
                    <Button onClick={handleSubmit} colorScheme='blue' mr={3}>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalBody>

            
        </ModalContent>
    </Modal>

    <Button className='loginLink' onClick={onOpen} variant='link'>Submit Feature</Button>
    </>
  )
}

export default FeatureModal;