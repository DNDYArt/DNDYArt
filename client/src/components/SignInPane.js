import React from "react";


function SignInPane(props) {
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log("submitted sign in form");
    }
  
  
    return (
      <>
        <div className='component--pane-blur' onClick={props.toggle}></div>
  
        <form onSubmit={handleSubmit} className='component--form'>
          <h3>Sign In</h3>
          <div className='form-group'>
            <label for='username'>Username</label>
            <input type='text' name='username' placeholder='Username' />
          </div>
          <div className='form-group'>
            <label for='email'>Email</label>
            <input type='email' name='email' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <label for='Password'>Password</label>
            <input type='password' name='Password' placeholder='Password'/>
          </div>
          <div className='form-group'>
            <label for='confpass'>Confirm Password</label>
            <input type='password' name='confpass' placeholder='Confirm Password'/>
          </div>
          <button type='submit'>Signup</button>
        </form>
      </>
    )
  }

export default SignInPane;