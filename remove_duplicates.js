


document.querySelector(".Duplicates").addEventListener("click",function(){
    var Items = document.querySelector("#Items").value;
     inputs = (Items.split(','));
     inputarray = Array.from(new Set(inputs));
      document.querySelector("#output").value = inputarray.join(', ');
});