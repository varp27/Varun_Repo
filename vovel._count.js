
var vovelcount = document.querySelector(".vovelcount");
var result = document.querySelector(".result");

vovelcount.addEventListener("click", function(){
    var name = document.querySelector(".name").value;
    var vovels = ['a' , 'e' , 'i' , 'o' , 'u' , 'A', 'E' , 'I' , 'O' , 'U'];
    var count =0;

    for(let char of name){
       count += (vovels .includes(char) ?   1 : 0 );
    }
    result.textContent = " result :" +count; 

});