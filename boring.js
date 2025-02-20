let running = true
let answer = ["dark", "Dark"]
let guess;
let hint = false;

while(running){
    guess = window.prompt("Who uses chatgdp for scirpt")

    if(guess.includes(answer[0]) || guess.includes(answer[1])){
        window.alert("correct😹😹")
        running = false;
    }
    else if(guess !== answer && !hint){
        window.alert("Hint: its dark😹")
        hint = true;
    }
    else if(guess.includes(`no`)){
        window.alert("Meeh L answer")
    }
    else{
        window.alert("dumbass")
    }
}
console.log(answer)
