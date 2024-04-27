import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <>
<div className='bg-dark text-white'>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title> Webpage</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
  <header>
    <div className="header-content ">
      <h1>SSBT COET</h1>
      <p>Lets Get Ready For Exam</p>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <Link to='/login'>
            <button type="button" class="btn btn-light">LogIn</button>  
        </Link>
        <Link to='/register'>
            <button type="button" class="btn btn-light ">Register</button>
        </Link>       
      </div>
    </div>
  </header>
</div>


    </>
  )
}

export default LandingPage