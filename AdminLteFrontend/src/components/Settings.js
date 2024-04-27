import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";
function Settings() {
  return (
    <>
     <div>
      <Header/>
      <SideNav/> 
     <div className='wrapper'>
      <div className='content-wrapper' style={{color:'black', textAlign:'center'}}>
        Settings
      </div>
     </div>
      <Footer/>  
      </div>
   </>
  )
}

export default Settings