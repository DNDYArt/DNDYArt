import { useContext } from "react";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../utils/UserContext";

function Login() {

  const context = useContext(UserContext);

  async function loginCollector(e) {
    e.preventDefault()
    const loginInfo = {"email": e.target.email.value, "password": e.target.password.value}
    if (loginInfo.email && loginInfo.password){
      const response = await fetch('/api/collectors/login',
      {
        method:'PUT',
        body:JSON.stringify(loginInfo),
        headers: { 'Content-Type': 'application/json' }
      })
  
      if (response.ok) {
        const data = await response.json()
        context.setCurrentUser({...context.currentUser ,
          'loggedIn': true, 
          'userType': 'collector', 
          'firstName': data.first_name, 
          'lastName': data.last_name, 
          'email': data.email})
      } else {
        alert('Email or Password incorrect')
      }
    } else {
      alert('Please enter something')
    }
  }

  async function loginArtist(e) {
    e.preventDefault()
    const loginInfo = {email: e.target.email.value, password: e.target.password.value}
    if (loginInfo.email && loginInfo.password) {
      const response = await fetch('/api/artists/login',
      {
        method:'PUT',
        body:JSON.stringify(loginInfo),
        headers: { 'Content-Type': 'application/json' }
      })
  
      if (response.ok) {
        const data = await response.json()
          context.setCurrentUser({...context.currentUser ,
            'loggedIn': true, 
            'userType': 'artist', 
            'firstName': data.first_name, 
            'lastName': data.last_name,
            'bio': data.bio,
            'location': data.location,
            'email': data.email})
      } else {
        alert('Email or Password incorrect')
      }
    } else {
      alert('Please enter something')
    }
  }


  return (  // This needs some actual formatting. Just adding it so that I can test logging in and altering the userContext provider
    <>
    <div> {context.currentUser.firstName + ' ' + context.currentUser.lastName} </div>

    <form onSubmit={loginCollector}>
      <h2>Collector Login</h2>
      <div>
        <input name='email' type='email' placeholder='email'  style={{'color': 'black'}}/>
      </div>
      <br/>
      <div>
        <input name='password' type='password' placeholder='password' style={{'color': 'black'}}/>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
    <br/>
    <form onSubmit={loginArtist}>
      <h2>Artist Login</h2>
      <div>
        <input name='email' type='email' placeholder='email' style={{'color': 'black'}}/>
      </div>
      <br/>
      <div>
        <input name='password' type='password' placeholder='password'  style={{'color': 'black'}}/>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
    </>
  )
}

export default Login;