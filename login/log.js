let replace=()=>{
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


let form1 =()=>{
    let name = Document.form["sign-up"]["user_name"].value
    let email =Document.form["sign-up"]["email"].value
    let password =Document.form["sign-up"]["passwprd"].value
    let rpassword =Document.form["sign-up"]["re-password"].value

    if(name==""||email =="" ||password==""||rpassword ==""){
        alert("Enter all your details")
    }
    else{
        alert("sucessfull sign-up")
    }
}
let form2 =()=>{
    let username22= Document.forms["login"]["user-name2"].value
    let password22 = Document.forms["login"]["password3"].value

    if(username22==""||password22==""){
        alert("enter all your details")
    }
    else{
        alert('login sucessfully')
    }

}