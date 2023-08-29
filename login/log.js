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
