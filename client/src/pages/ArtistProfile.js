
import Picasso from '../components/images/picasso-pfp.jpeg'
import Mando from '../components/images/girl-with-mandolin.jpeg'
import { useContext, useState } from 'react';
import { UserContext } from '../utils/UserContext';
import FeatureModal from '../components/FeatureModal'
import { FeatureContext } from '../utils/FeatureContext';

function ArtistProfile() {
  const context = useContext(UserContext)
  const featureContext = useContext(FeatureContext)

  const [pfpic, setpfpic] = useState(context.currentUser?.pfpic)
  const [feature, setFeature] = useState()
  
  // From here
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
    context.setCurrentUser({...context.currentUser, 'pfpic': imgUrl})
    setpfpic(imgUrl)
    try {
      const response = await fetch('http://localhost:3001/api/artists/pfp',
      {
        method:'PUT',
        body:JSON.stringify({imgUrl, email: context.currentUser.email}),
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>  
      <div className='profile-container vh'>
          <div className="pfpDiv pfp">
            <img src={ pfpic || 'https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp'} alt='profile pic' style={{'width': '100%', 'height': '100%'}}/>
            <button id='pfpic' onClick={showUploadWidget} style={{'border-radius': '5px', 'background-color': 'blue', 'color': 'white', 'margin': '2px'}}>Upload</button>
          </div>
          <div className='text-container'>
            <h1 className='artistName'>{context.currentUser.firstName + " " + context.currentUser.lastName}</h1>
            <h3 className='artistLocation'>{context.currentUser.location}</h3>
            <p className='artistBio'>
              {context.currentUser.bio}
            </p>
          </div>
          <div className='feature-text'>
            <h1>Featured Work</h1>
          </div>

          <FeatureModal firstName={context.currentUser.firstName} lastName={context.currentUser.lastName} insertFeature={featureContext.insertFeature}/>
          
          {/* <div className='mando'>
            <img src={Mando} alt='girl with mandolin by Picasso'></img>
          </div>
          <div className='feature-description'>
            <h4>Girl with a Mandolin (1910)</h4>
            <p className='mando-description'>Girl with a Mandolin is an early example of an Analytic Cubist painting. Picasso painted from a model who sat in front of him, facing him. You, as the viewer, are in the position of the artist. The model is a nude girl holding a mandolin. We see the upper part of her body, from her thighs to her head.</p>
          </div> */}
      </div>  
    </>
  );
}

export default ArtistProfile;