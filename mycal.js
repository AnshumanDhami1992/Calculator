function show(val){
    document.getElementById("_result").value += val;
    return val
}

function sum(){ 

let x = document.getElementById("_result").value

let y = eval(x);

document.getElementById("_result").value = y

return y

}

function clearScreen(){
document.getElementById("_result").value = " " ;
}
