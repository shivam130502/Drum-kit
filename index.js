// to detect button press.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;// "."  means a class has been specified

for(var i = 0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){ //anonymous function
    var buttonInnerHTMl = this.innerHTML;
    makeSound(buttonInnerHTMl);
    buttonAnimation(buttonInnerHTMl);
  });
}

//to detect keyboard press;

document.addEventListener("keypress",function(event){
      makeSound(event.key);//event.key gives the value of the key pressed.
      buttonAnimation(event.key);
});

function makeSound(key){
  switch(key){//using switch to give different sounds when each button is pressed.
    case "w" :
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a" :
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s" :
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d" :
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j" :
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k" :
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l" :
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default : console.log(buttonInnerHTMl);

  }
}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);//selecting the key that is pressed
activeButton.classList.add("pressed");//adding pressed class to give shadow animation when pressed

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
//setTimeout is a function which executes next funtion after certain amount of time.
//here function is anonymous function.
//100 means 0.1 seconds
}
