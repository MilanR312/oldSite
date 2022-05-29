let a;
let solution;


function Getbiggest(num){
    for (let i = 0;; i++){
        let c = 1 << i;
        biggest = i-1;
        if (c > num){
            return biggest;
        }
    }
}

function toBin(biggest, num, decimals){
    let out = "";
    for (let i = biggest; i >= -decimals; i--){
        if (num - 2**i > 0){
            num = num - 2**i;
            out += "1";
        } else {
            out += "0";
        }
        if(i == 0){
            out += '.';
        }
    }
    return out;
}

function nextInt(spanId, inputId){
    a = (Math.random()*1000).toFixed(5);

    let biggest = Getbiggest(a);

    solution = toBin(biggest,a,4)
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



let questionApple;
let answerApple;

function nextnotIEEEFloat(display, input){
    let max = 1000;
    let min = -1000;
    console.clear()
    let decimals = 3;
    let nonIEESign = "";
    let nonIEEFloat = (Math.random() * (max - min) + min).toFixed(decimals);
    questionApple = nonIEEFloat;
   
    console.log(nonIEEFloat)
    console.log("float =" + nonIEEFloat)

    if (nonIEEFloat < 0){
        nonIEESign = "1";
        nonIEEFloat = Math.abs(nonIEEFloat);
    } else {
        nonIEESign = "0";
    }
    console.log("after abs = " + nonIEEFloat)

    let nonIEEbin = toBin(Getbiggest(nonIEEFloat),nonIEEFloat,31)
    let nonIEEmantissa = nonIEEbin.replace('.','');
    nonIEEbin = parseInt(nonIEEbin).toString()


    let nonIEEExp = 0;//get the exponent
    while (nonIEEbin != ""){
        nonIEEbin = nonIEEbin.slice(0,-1)
        nonIEEExp += 1;
    }

    console.log("exp = 2**" + nonIEEExp)
    nonIEEExp = nonIEEExp + 128

    nonIEEExp = toBin(Getbiggest(nonIEEExp), nonIEEExp, 0).slice(0,-1)

    


    nonIEEmantissa = nonIEEmantissa.slice(0,32);
    
    nonIEEmantissa = nonIEEmantissa.padEnd(31,'0')

    console.log("Sign = " + nonIEESign)
    console.log("mantis = " + nonIEEmantissa)
    console.log("exp = " + nonIEEExp)

    answerApple = nonIEESign + nonIEEmantissa + nonIEEExp

    document.getElementById(display).innerHTML = questionApple;
    document.getElementById(input).value = "";
}
function solvenotIEE(input, output){
    let predict = document.getElementById(input).value;
    document.getElementById(output).innerHTML = (predict == answerApple) ? "Correct" : "Incorrect";
}
function answernotIEEE(input){
    document.getElementById(input).value = answerApple
}

let questionDouble;
let answerDouble;

function nextDouble(display, input){
    let max = 1000;
    let min = -1000;
    console.clear()
    let decimals = 3;
    let DoubleSign = "";
    let Double = (Math.random() * (max - min) + min).toFixed(decimals);
    Double = -0.035
    questionDouble = Double;
   
    console.log(Double)
    console.log("float =" + Double)

    if (Double < 0){
        DoubleSign = "1";
        Double = Math.abs(Double);
    } else {
        DoubleSign = "0";
    }
    console.log("after abs = " + Double)

    let DoubleBin = toBin(Getbiggest(Double)+1,Double,52)
    let DoubleMantissa = DoubleBin.replace('.','');
    DoubleBin = parseInt(DoubleBin).toString()


    let DoubleExp = 0;//get the exponent

    if (DoubleBin <= 0){
        while (DoubleBin != ""){
            DoubleBin = DoubleBin.slice(1,DoubleBin.length)
            DoubleExp += 1;
        }
    } else {
        while (DoubleBin != ""){
            DoubleBin = DoubleBin.slice(0,-1)
            DoubleExp += 1;
        }
    }


    console.log("exp = 2**" + DoubleExp)
    DoubleExp = DoubleExp + 127
    console.log("test " + DoubleExp)
    DoubleExp = toBin(Getbiggest(DoubleExp), DoubleExp, 0).slice(0,-1)

    


    DoubleMantissa = DoubleMantissa.slice(0,32);
    
    DoubleMantissa = DoubleMantissa.padEnd(31,'0')

    console.log("Sign = " + DoubleSign)
    console.log("mantis = " + DoubleMantissa)
    console.log("exp = " + DoubleExp)

    answerDouble = DoubleSign + DoubleMantissa + DoubleExp

    document.getElementById(display).innerHTML = questionDouble;
    document.getElementById(input).value = "";
}
function solveDouble(input, output){
    let predict = document.getElementById(input).value;
    document.getElementById(output).innerHTML = (predict == answerDouble) ? "Correct" : "Incorrect";
}
function answerDoublefunc(input){
    document.getElementById(input).value = answerDouble
}