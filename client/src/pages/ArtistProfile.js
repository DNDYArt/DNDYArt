
import Picasso from '../components/images/picasso-pfp.jpeg'
import Mando from '../components/images/girl-with-mandolin.jpeg'
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';

function ArtistProfile() {
  const context = useContext(UserContext)

  return (
    <>  
      <div className='profile-container vh'>
          <div className="pfpDiv pfp">
            <img src={Picasso} alt='profile pic' />
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
          <div className='mando'>
            <img src={Mando} alt='girl with mandolin by Picasso'></img>
          </div>
          <div className='feature-description'>
            <h4>Girl with a Mandolin (1910)</h4>
            <p className='mando-description'>Girl with a Mandolin is an early example of an Analytic Cubist painting. Picasso painted from a model who sat in front of him, facing him. You, as the viewer, are in the position of the artist. The model is a nude girl holding a mandolin. We see the upper part of her body, from her thighs to her head.</p>
          </div>
      </div>  
    </>
  );
}

export default ArtistProfile;