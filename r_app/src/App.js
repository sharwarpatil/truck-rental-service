import './App.css';
import Navbar from './component/navbar.js'
import Card from "./component/card.js"














function App() {

  
 // creating a auto slide for images
 let img =()=>{
  document.getElementById("img1").style.display="none"
  document.getElementById("img2").style.display="none"
  document.getElementById("img3").style.display="none"
  document.getElementById("img").style.display="block"
}

let img1 =()=>{
  document.getElementById("img1").style.display="block"
  document.getElementById("img2").style.display="none"
  document.getElementById("img3").style.display="none"
  document.getElementById("img").style.display="none"
}


let img2 =()=>{
  document.getElementById("img1").style.display="none"
  document.getElementById("img2").style.display="block"
  document.getElementById("img3").style.display="none"
  document.getElementById("img").style.display="none"
}


let img3 =()=>{
  document.getElementById("img1").style.display="none"
  document.getElementById("img2").style.display="none"
  document.getElementById("img3").style.display="block"
  document.getElementById("img").style.display="none"
}
 
// set time out before set interval start 
setTimeout(img, 3000); // 3 seconds
setTimeout(img1, 6000); // 6 seconds
setTimeout(img2, 9000); // 9 seconds
setTimeout(img3, 12000); // 12 seconds

//set timeout for images
setInterval(() => {
   setTimeout(img, 3000); // 3 seconds
   setTimeout(img1, 6000); // 6 seconds
   setTimeout(img2, 9000); // 9 seconds
   setTimeout(img3, 12000); // 12 seconds
}, 12000); 



  // dark mode 
  function Dark(){
   

  }


  return (
    <>
    
      <Navbar/>
    
          

          <div  id="container_img">
              <div className="img" id="img">
  
              </div>
  
              <div className="img" id="img1">
  
  
              </div>
              <div className="img" id="img2">
  
              </div>
  
              <div className="img" id="img3">
  
              </div>
          </div>


          
          
          <div id="under_image_text">
      
          <p id="text">
            
              Rent a truck Now

            <i class="bi bi-truck"></i>
            <svg xmlns="http://www.w3.org/2000/svg" id="icon" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>


            <i class="bi bi-truck"></i>
            <svg xmlns="http://www.w3.org/2000/svg" id="icon" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>


            

          </p>

          </div>


          <div id="beside_card">
            <p id="fil"> Fillers</p>
          <button type="button" class="btn btn-primary">
            Cheapest
          </button>
          <button type="button" class="btn btn-primary">
            Expensive
          </button>
          <button type="button" class="btn btn-primary">
            Smallest
          </button>
          <button type="button" class="btn btn-primary">
            Largest
          </button>
          <button type="button" class="btn btn-primary">
            most brought
          </button>
          </div>

        
          
        

          <div id="content"   >

          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
       
    </>
  );
}

export default App;
