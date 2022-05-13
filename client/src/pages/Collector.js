import Profpic from '../components/images/defaultprofilepic.jpeg'

function CollectorProfile() {
  return (
    <>  
      <div className='profile-container vh'>
          <div className="pfpDiv pfp">
            <img src={Profpic} alt='profile pic' />
          </div>
          <div className='text-container'>
            <h1 className='artistName'>Collector Name</h1>
            <h3 className='artistLocation'>Collector Location</h3>
            <p className='artistBio'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Varius quam quisque id diam vel. Condimentum vitae sapien pellentesque habitant. Nisl nunc mi ipsum faucibus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eu feugiat pretium nibh ipsum consequat nisl vel. Vestibulum morbi blandit cursus risus. Vitae auctor eu augue ut lectus arcu bibendum at. Cursus euismod quis viverra nibh cras. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Odio euismod lacinia at quis risus. Euismod nisi porta lorem mollis aliquam. Lacus vel facilisis volutpat est velit egestas dui id ornare.
            </p>
          </div>
      </div>  
    </>
  );
}

export default CollectorProfile;