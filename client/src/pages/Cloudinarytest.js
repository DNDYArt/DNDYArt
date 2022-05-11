import { useState } from "react";

function Cloudinarytest() {
  
  const [lastImage, setLastImage] = useState()
  
  // From here
  function showUploadWidget() { 
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

  function sendURL(imgUrl) {
    setLastImage(imgUrl)
  }
  // To here

  return (
    <>
    <img src={lastImage}/>
    <button onClick={showUploadWidget} style={{'border-radius': '5px', 'background-color': 'blue', 'color': 'white', 'margin': '2px'}}>Upload</button>
    {/* Format your button as shown. Style is completely optional */}
    </>
  )
}

export default Cloudinarytest;