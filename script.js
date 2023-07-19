// step 1 creating three variables firstNbr, SecondNbr and operator
// step 2 creating operator function that calls two nbrs and operator 



// calling html elements

let display = document.querySelector("#display");
const   btns = document.querySelectorAll(".buttons");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");
const signsBtn = document.querySelector("#signs");
const percentageBtn = document.querySelector("#percentage");
const divisionBtn = document.querySelector("#division");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const timesBtn = document.querySelector("#times");
const dotBtn = document.querySelector("#dot");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");


// adding eventListener to the button

one.addEventListener("click", () => {
    display.value += parseInt(1);
});

two.addEventListener("click", () => {
    display.value += parseInt(2);
});

three.addEventListener("click", () => {
    display.value += parseInt(3);
});

four.addEventListener("click", () => {
    display.value += parseInt(4);
});

five.addEventListener("click", () => {
    display.value += parseInt(5);
});

six.addEventListener("click", () => {
    display.value += parseInt(6);
});

seven.addEventListener("click", () => {
    display.value += parseInt(7);
});

eight.addEventListener("click", () => {
    display.value    += parseInt(8);
});


nine.addEventListener("click", () => {
    display.value += parseInt(9);
});

zero.addEventListener("click", () => {
    display.value += parseInt(0);
});


equalBtn.addEventListener("click", () => {
    display.value = `${one + four} `;
});

// declaration
// let firstNbr = parseInt(prompt("First number: "));
// let operater = prompt("Operator: ");
//let secondNbr = parseInt(prompt("Second number: "));


function operaterFunc(firstNbr, secondNbr) {
    switch(operater) {
        case "+":
            return `${firstNbr} + ${secondNbr} = ${firstNbr+secondNbr}`;
            break;
        case "-":
            return `${firstNbr} - ${secondNbr} = ${firstNbr-secondNbr}`;
            break; 
        case "*":
            return `${firstNbr} x ${secondNbr} = ${firstNbr*secondNbr}`;
            break;         
        case "/":
            return `${firstNbr} / ${secondNbr} = ${firstNbr/secondNbr}`;
            break;
        default:
            return "Invalid input";
            break;     
    }
}

