function invertedtriangle(i){
    for(var row = i ; row>0; row--){
    console.log("*" .repeat(row));
}}
invertedtriangle(9);



function divisibleby3(number){
    for(i=0; i < number.length; i++){
        if(number[i] % 3 == 0 && number[i]%2 !== 0){
            console.log(number[i]);
        }else{
            continue;
        }
    }
}
var number = [1,2,3,4,5,6,7,8,9];
divisibleby3(number);


function triangle(i){
    for(var row =i ; row>0; row--){
    console.log("*".repeat(row));
}}
triangle(3);



function correctcart(cart){
    return cart.map(num => num *2);
};
var cart = [1,2,3,4,5];
var correctedcart = correctcart(cart);
console.log(correctedcart);



function temprature(celcius){
  return celcius * ( 9/5) + 32;
};
var celcius = 25;
var faranite = temprature(celcius);
console.log(`Temperature in Feranite : ${faranite}`);



function rate( carrented, cartype){
    var carscost ={ 
    'Economy': 4000,
    'Midsize' : 10000,
    'Luxury': 20000
};
    if ( ! carscost[cartype]){
             return "invalid car, please chose from above."
    }
  var price = carrented * carscost[cartype];
  return `Rs  ${price} -/`;
};
console.log(rate(3,'Economy'));




function calculatebill( dishcost , noofperson) {
     var totalcost = dishcost.reduce((sum, cost) => sum + cost, 0);

     var costperperson = (totalcost / noofperson);
      return{
       totalcost : totalcost,
       costperperson :  costperperson
    };
}
var dishcost = [12,34,43,55,34];
var noofperson = 4;
var result = (calculatebill(dishcost,noofperson));
console.log(result);




var totalcost =(cart)=>{
    var cost = cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
    return cost; 
}
var cart = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 150, quantity: 1 },
    { unitPrice: 200, quantity: 3 }
]
var result = ( totalcost(cart));
console.log(result);



var percentange =( orignalprice, discountlprice)=>{
    if(orignalprice <= 0 || discountlprice < 0 || discountlprice > orignalprice){
        throw new Error("invalid price");
    }
    var discountamount = orignalprice - discountlprice;
    var discountpercentage = (discountamount / orignalprice ) * 100;
    return discountpercentage.toFixed(2);
};
var orignalprice = 130;
var discountlprice =90;
var result = console.log(percentange(orignalprice,discountlprice));
console.log(`The discounted price is ${result}`);


//Random number b/w 
(() => {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number between 1 and 100: ${randomNumber}`);
})();



var  customer = {
    name :" varun",
    balance : 1000,


deposit(amount){
    if( amount > 0 ) {
        this.balance +=amount;
        console.log(`Deposit successfully done ${this.balance}`);
    } else {
        console.log(`Balance should be positive`);
    }
    },
 withdraw(amount){
    if(amount > 0 && amount <= this.balance){
        this.balance -= amount; 
        console.log(`withdraw successfully done, now balance is ${this.balance}`);
    }else if(amount > this.balance){
        console.log(`Insufficient balance`);
    }
    else{
        console.log(`Balance should be in posotive`);
    }
},
getBalance(){
    console.log(`Balance in the account is ${this.balance}`);
    return this.balance;
}
};
customer.getBalance();
customer.deposit(600);
customer.withdraw(900);
customer.withdraw(2000);
customer.getBalance();



var heading = document.querySelector(".heading");
var toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function(){
    if(heading.textContent === "The most affordable learning platform"){
         heading.textContent = "PW Skills.";
    }else {
        heading.textContent = "The most affordable learning platform";
    }
})




document.querySelector(".Submit").addEventListener("click", function(event){
    event.preventDefault();
    var Email = document.querySelector("#Email").value;
var Password = document.querySelector("#Password").value;
   
    if(Email.includes('@') && Password.length >= 8 ){  
        Message.textContent = `Valid email and password!`;
        Message.style.color = Green;
    }else{
        message.textContent = `Invalid email or password!`;
        Message.style.color = Red;
    }
});


var arrnum = [2,4,3,4,2,6,5,6]
var duplicates = arrnum.filter((ele, index, arr) => arr.indexOf(ele) == ! index  )
console.log(duplicates)