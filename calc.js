var screen = document.getElementById('screen');

function btnClick(value){
    screen.value += value;
}

function clearscreen(){
    screen.value="";
}

function lastclear(){
    screen.value=screen.value.toString().slice(0,-1);
}

function calculate(){
try{
    screen.value = eval(screen.value);
}
catch(error){
    screen.value = "Error";
}
}

function findresult(){
    var result =eval(screen.value)
    screen.value=result;
}