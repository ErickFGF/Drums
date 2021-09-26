
function makeSound(key){
    console.log("you pressed " + key);
    var sound_file = "";
    switch(key){
        case "w":
            sound_file = "tom-1";
            break;
        case "a":
            sound_file = "tom-2";
            break;
        case "s":
            sound_file = "tom-3";
            break;
        case "d":
            sound_file = "tom-4";
            break;
        case "j":
            sound_file = "snare";
            break;
        case "k":
            sound_file = "crash";
            break;
        case "l":
            sound_file = "kick-bass";
            break;
        default:
            return;
    }
    var sound = new Audio("sounds/" + sound_file + ".mp3");
    sound.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    if(activeButton){
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
    
}

var drums = document.querySelectorAll(".drum");
var numOfDrums = drums.length;

for(var i = 0; i<numOfDrums; i++){
    
    drums[i].addEventListener("click", function(){
        var keyPressed = this.innerHTML;
        makeSound(keyPressed);
        buttonAnimation(keyPressed);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

/*for(var i = 0; i<numOfDrums; i++){
    drums[i].addEventListener("keypress", function(){
        var keyPressed = this.innerHTML;
        makeSound(keyPressed);
    });
}*/