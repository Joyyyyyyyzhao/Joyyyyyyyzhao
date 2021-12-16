
var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function b(){
    var a=new Date().getHours();
    if(6<=a<12){
        alert('Good morning');
    }
    else if(12<=a<18){
        alert('Good afternoon');
    }
    else{
        alert('Good night')
    }
}