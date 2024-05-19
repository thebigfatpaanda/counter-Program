const decreasebtn=document.getElementById("decreasebtn");
const reset=document.getElementById("reset");
const increasebtn=document.getElementById("increasebtn");
const number=document.getElementById("number");

let count=0;

increasebtn.onclick=function(){
    count++;
    number.textContent=count;
}

decreasebtn.onclick=function(){
    count--;
    number.textContent=count;
}
reset.onclick=function(){
    count=0;
    number.textContent=count;
}