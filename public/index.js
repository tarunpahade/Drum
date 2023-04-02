
function myFunction(event) {
    var x = event.key;
   console.log(x);
    document.getElementsByClassName(x)[0].classList.add("click")
setTimeout(function () {
    document.getElementsByClassName(x)[0].classList.remove("click")
},200)



   if(x==="w"){
    W()
 
   }
   if(x==="a"){
   A()
   }
   if(x==="s"){
 S()
   }
   if(x==="d"){
    D()
   }
   if(x==="k"){
    K()
   }
   if(x==="l"){
 L()
   }
   if(x==="i"){
I()
   }
  
}



  function W(){
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();


   
}
function A(){
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();

}
function S(){
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();

}
function D(){
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();

}

function K(){
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();

}
function L(){
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();

}
function I(){
    var audio = new Audio('./sounds//tom-4.mp3');
    audio.play();

}