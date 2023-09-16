import React from 'react'



// for button


const btn_on= () => {
   let box1= document.getElementsByClassName("btn_radio")
   let box2 = document.getElementsByClassName("btn_radio2")
   box1.style.display ="none"
   box2.style.display="block"
   
  
  }
  const btn_of= () => {
    let box1= document.getElementsByClassName("btn_radio")
   let box2 = document.getElementsByClassName("btn_radio2")
   box2.style.display ="none"
   box1.style.display="block"
   
  
  }

export default function Btn() {
  return (
    <>
      <div onClick={btn_on} className="btn_radio">
          <div className="circle_btn1"></div>

      

          </div>

          <div onClick={btn_of} className="btn_radio2">
          
      
          <div className="circle_btn2"></div>
          
      
          </div>
    </>
  )
}
