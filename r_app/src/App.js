import './App.css';
import Navbar from './component/navbar.js'
import Card from "./component/card.js"
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


function App() {
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
         <p>
             Rent your truck Now
         </p>

        </div>


        <div id="beside_card">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum beatae voluptatibus consectetur amet ducimus laboriosam illo molestiae aliquid labore itaque! Ad placeat laudantium incidunt rerum eveniet, omnis dolores consequatur ratione?
          </p>
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
