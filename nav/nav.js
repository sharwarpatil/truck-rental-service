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

//set timeout for images
setInterval(() => {
     setTimeout(img, 3000); // 3 seconds
     setTimeout(img1, 6000); // 6 seconds
     setTimeout(img2, 9000); // 9 seconds
     setTimeout(img3, 12000); // 12 seconds
 }, 12000); 

 