


function age(){
var age =parseFloat(prompt('How old are you?'));
if (age<15){
	console.log('Preferably accompanied by a parent');
}
else{
	console.log('Keep you eyes on utensils');
}
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    
}


function myFunction() {
    var x = document.getElementById("contact")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
