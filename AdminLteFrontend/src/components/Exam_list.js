import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";
function Exam_list() {
  return (
   <>
    <div className="bg-white">
      <Header/>
      <SideNav/> 
      <div style={{marginLeft:'12vw'}}>
      Exam list
      </div>
    
      <Footer/>  
      </div>
   </>
  )
}

export default Exam_list