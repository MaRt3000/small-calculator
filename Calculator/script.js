var output = document.querySelector(".output");
var additionBtn = document.querySelector(".addition");
var minusBtn = document.querySelector(".minus");
var multiplicationBtn = document.querySelector(".multiplication");
var divisionBtn = document.querySelector(".division");


var firstValInput =document.querySelector(".firstval");
var secondValInput = document.querySelector(".secondval");

var newValue = "";

function additionFunction() {
    newValue = Number(firstValInput.value) + Number(secondValInput.value);
    output.innerText = newValue;

   updateOutput();
}

function minusFunction() {
    newValue = Number(firstValInput.value) - Number(secondValInput.value);
    output.innerText = newValue;

    updateOutput();

}

function multiplicationFunction() {
    newValue = Number(firstValInput.value) * Number(secondValInput.value);
    output.innerText = newValue;

   updateOutput();
}

function divisionFunction() {
    newValue = Number(firstValInput.value) / Number(secondValInput.value);
    output.innerText = newValue;

   updateOutput();
}

function updateOutput() {
    firstValInput.value = "";
    secondValInput.value = "";
}