let a;
let solution;

function nextInt(spanId, inputId){
    a = (Math.random()*1000).toFixed(5);
    let b = a;
    let biggest;
    let out = "";

    for (let i = 0;; i++){
        let c = 1 << i;
        biggest = i-1;
        if (c > a){
            break;
        }
    }

    for (let i = biggest; i > -5; i--){
        if (b - 2**i > 0){
            b = b - 2**i;
            out += "1";
        } else {
            out += "0";
        }
        if(i == 0){
            out += ',';
        }
    }
    solution = out
    console.log(solution);
    document.getElementById(spanId).innerHTML = a;
    document.getElementById(inputId).value = "";
}
function solve(input, output){
    let predict = document.getElementById(input).value;
    document.getElementById(output).innerHTML = (predict == solution) ? "Correct" : "Incorrect";
}

function answer(input){
    document.getElementById(input).value = solution
}