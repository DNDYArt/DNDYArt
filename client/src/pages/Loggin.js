

function Loggin() {


  return (  // This needs some actual formatting. Just adding it so that I can test logging in and altering the userContext provider
    <>
    <form onSubmit={() => {return}}>
      <h2>Collector Login</h2>
      <div>
        <input type='email' placeholder='email'/>
      </div>
      <br/>
      <div>
        <input type='password' placeholder='password' />
      </div>
    </form>
    <br/>
    <form onSubmit={() => {return}}>
      <h2>Artist Login</h2>
      <div>
        <input type='email' placeholder='email'/>
      </div>
      <br/>
      <div>
        <input type='password' placeholder='password' />
      </div>
    </form>
    </>
  )
}

export default Loggin;