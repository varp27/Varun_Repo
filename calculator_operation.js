var num1 = parseFloat( document.querySelector("#num1"));
var num2 = parseFloat(document.querySelector("#num2"));
var operator = document.querySelector("#operator");

document.querySelector(".calculate").addEventListener("click", function(){
    var num1 = parseFloat( document.querySelector("#num1").value);
var num2 = parseFloat(document.querySelector("#num2").value);
var operator = document.querySelector("#operator").value;

    var result;

    switch(operator){
        case "+" :
        result = num1 + value;
        break;
        case "-" :
            result = num1 - num2;
            break;
        case "*" :
            result = num1 * num2;
            break;
         case "/" :
            result = num1 / num2;
            break;
            default :
            console.log("invalid operator");
            return;
    }
    console.log("Result :" ,result);
})