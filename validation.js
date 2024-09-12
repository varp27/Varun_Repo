document.querySelector(".Submit").addEventListener("click", function(event){
    event.preventDefault();
    var Email = document.querySelector("#Email").value;
var Password = document.querySelector("#Password").value;
var message  = document.querySelector(".message")
   
    if(Email.includes('@') && Password.length >= 8 ){  
        message.textContent = `Valid email and password!`;
        message.style.color = "Green";
    }else{
        message.textContent = 'Invalid email or password!';
        message.style.color = "Red";
    }
});

