import { useState, useEffect } from "react"
import SignInPane from '../components/SignInPane';
import SignUpPane from '../components/SignUpPane';
import '../assets/homePage.css'

const HomePage = (props) => {
      
  const [signupVis, setSignup] = useState(false)
  const [loginVis, setLogin] = useState(false)

  function toggle(e) {
    switch (e.target.id) {
      case 'signup':
        setSignup(!signupVis)
        setLogin(false)
        break;
      case 'login':
        setLogin(!loginVis)
        setSignup(false)
        break;
      default:
        setSignup(false);
        setLogin(false);
    }
  }

  return (
    <>
    <div className='landing'>
      <div className='landing--banner'>
        <h1>DNDY IMAGE HERE</h1>
        <h2>...</h2>
      </div>
      
      <div className='landing--actions'>
          <button id='signup' className='landing--action-button' onClick={toggle}>Join DNDY</button>
          <button id='login' className='landing--action-button' onClick={toggle}>Sign In</button>
      </div>
    </div>
    {signupVis && <SignUpPane toggle={toggle}/>}
    {loginVis && <SignInPane toggle={toggle}/>}
    </>
  )
}

export default HomePage;