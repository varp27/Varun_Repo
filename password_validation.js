var Validate = document.querySelector("#Validate")
var conform_password = document.querySelector("#conform_password");
var password = document.querySelector("#password");

Validate.addEventListener("click",function(){
    if(password.value  ===  conform_password.value){
        console.log("Password Matched. Password validation Successful");
    }else{
        console.log("Password didn't match. Password validation unsuccessful");
    }
});