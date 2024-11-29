var target = document.querySelectorAll(".drum");

for(let i =0;i<target.length;i++){
    target[i].addEventListener("click",function handleClick(){
    
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        
        buttonAnimation(innerHTML);
    });
    
}
// ore event listener which is keydown whenever any key in the keyboard is presseed it detects it,

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":

            //Audio is inbuilt constructor which intialises a new elemeent
            var drum1 = new Audio("sounds/tom-1.mp3");
            drum1.play();
            break;
        case "a":
            var drum2 = new Audio("sounds/tom-2.mp3");
            drum2.play();
            break;
        case "s":
            var drum3 = new Audio("sounds/tom-3.mp3");
            drum3.play();
            break;
        case "d":
            var drum4 = new Audio("sounds/tom-4.mp3");
            drum4.play();
            break;

        case "j":
            var drum5 = new Audio("sounds/crash.mp3");
            drum5.play();
            break;
        case "k":
            var drum6 = new Audio("sounds/kick-bass.mp3");
            drum6.play();
            break;
        case "l":
            var drum7 = new Audio("sounds/snare.mp3");
            drum7.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}
function buttonAnimation(eventKey){
    var target = document.querySelector("."+eventKey);

    target.classList.add("pressed");

    setTimeout(function(){
        target.classList.remove("pressed");
    },100);
}