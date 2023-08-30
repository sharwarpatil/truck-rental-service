let replaceit = () => {
  let loginElement = document.getElementById("login");
  let box1Element = document.getElementById("box1");
  let box2Element = document.getElementById("box2");
  let signup = document.getElementById("signup");
  if (loginElement) {
      box1Element.style.display = "none";
      box2Element.style.display = "inline";
  } else {
      box2Element.style.display = "none";
      box1Element.style.display = "inline";
  }
 
  if (signup) {
    box1Element.style.display = "inline";
    box2Element.style.display = "none";
} else {
    box2Element.style.display = "inline";
    box1Element.style.display = "none";
}


}
let validatelog = ()=>{
    let username2 = document.getElementById("username2").value
    let password3 = document.getElementById("password3").value

    if(username2==""|| password3==""){
        alert("please enter all your details")
        return false
    }
   
}

let validatesign=()=>{
    let username =document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let password2 = document.getElementById("password2").value

    if(username==""|| email=="" || password=="" || password2 ==""){
        alert("please enter all your details")
    }
}