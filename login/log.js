function replace(){
    document.getElementById("button")
    if ("button"){
// if sign-in putton is pressed the second div dissapers and the first div is displayed on screen 
        document.getElementById("log").style.display="inline-block";
        document.getElementById("log2").style.display="none";
        
}
   else{
  
    document.getElementById("log2").style.display="inline-block";
    document.getElementById("log").style.display="none";
   }
}


function back_to_sign_In(){

    document.getElementById("signup")

    if("signup"){
        
        document.getElementById("log2").style.display="inline-block";
        document.getElementById("log").style.display="none";
        
}
   else{
  
    document.getElementById("log").style.display="inline-block";
    document.getElementById("log2").style.display="none";
    }
}