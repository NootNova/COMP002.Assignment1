
console.log("Hello wolrd from external script!");

const fun = "Enabled";

let funHad = 50;

const hadFun = true;

console.log(`Fun: ${fun}`);

console.log(`Fun had: ${funHad}`);

console.log(`Had fun: ${hadFun}`);

/* using const to have a value for the HTML elements that have the set class
being looked for with the = document.querySelector followed by the desired class
lets the Javascript put an even listener [which is just the Javascript looking for what is stated in the code, in this case a on click]
to follow the function of adding to the "let counterNumber = 0" numerical value and then add it to the earlier stated const of counterDisply
with an innerText to show on the HTML site a live counter.
*/

const counter = document.querySelector('.counter')

const counterDisplay = document.querySelector('.counter-display')

let counterNumber = 0

counter.addEventListener("click" , increaseCounter)

function increaseCounter(){

    counterNumber++

    counterDisplay.innerText = counterNumber

}
