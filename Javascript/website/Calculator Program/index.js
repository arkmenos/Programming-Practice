const display = document.getElementById("display");

let isError = false;
function appendToDisplay(input){
    if(isError){
        display.value = "";
        isError =false;
    }
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
        isError = true;
    }
}