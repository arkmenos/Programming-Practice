
const display =document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime= Date.now() - elapsedTime;
        timer = setInterval(update,10);
        console.log(timer);
        isRunning =true;
    }
}

function stop(){
    if(isRunning)
    {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minuites = Math.floor(elapsedTime/ (1000 *60)% 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minuites = String(minuites).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    display.textContent = `${hours.toString().padStart(2)}:${minuites}:${seconds.toString().padStart(2,0)}:${milliseconds}`;
}
