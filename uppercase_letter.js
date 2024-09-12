
document.querySelector(".submit").addEventListener("click", function(event){
 
    event.preventDefault();
   
    var name= document.querySelector(".name").value;
    
    name = (name.charAt(0)===name.charAt(0).toLowerCase())?name.charAt(0).toUpperCase() + name.slice(1) : name;

    document.querySelector(".output").textContent = "Modified name: " + name;
})
