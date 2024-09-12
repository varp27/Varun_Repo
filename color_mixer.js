document.querySelector("#calculate").addEventListener("click", function (){
    var color1 = document.querySelector("#color1").value.toLowerCase();
    var color2 = document.querySelector("#color2").value.toLowerCase();

    var result;
 
    switch (true){
     case (color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red"):
     result = "purple";
     break;
 
     case (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"):
     result = "orange";
     break;
 
     case (color1 === "blue" && color2 === "orange" || color1 === "orange" && color2 === "blue"):
     result = "green";
     break;
 
     default :
     console.log("invalid combination");
     break;
    }
    document.querySelector("#result").textContent = "result :" + result;
    console.log("Result :", result);
 });
