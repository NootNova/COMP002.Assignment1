
console.log("Hello wolrd from external script!");

const fun = "Enabled";

let funHad = 50;

const hadFun = true;

console.log(`Fun: ${fun}`);

console.log(`Fun had: ${funHad}`);

console.log(`Had fun: ${hadFun}`);

const counter = document.querySelector('.counter')

const counterDisplay = document.querySelector('.counter-display')

let counterNumber = 0

counter.addEventListener("click" , increaseCounter)

function increaseCounter(){

    counterNumber++

    counterDisplay.innerText = counterNumber
    
}
