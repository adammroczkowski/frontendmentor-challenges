const billInput = document.querySelector(".bill-input");
const numberOfPeople = document.querySelector(".input-number-of-people");
const percentTipPerPerson = document.querySelector(".tip-custom-input");

billInput.addEventListener("input", setBillValue);

let billValue = 0.0;
function setBillValue() {
  billValue = parseFloat(billInput.value);
}

numberOfPeople.addEventListener("input", setNumberOfPeople);
let numberOfPeopleValue = 1;

function setNumberOfPeople() {
  numberOfPeopleValue = Number(numberOfPeople.value);
  tipAmount();
  total();
}

const percent = document.querySelectorAll(".tips");

let selectedPerecent = 1;
for (const item of percent) {
  item.addEventListener("click", () => {
    selectedPerecent = parseFloat(item.dataset.percent);
  });
}

const amount = document.querySelector(".amount");
function tipAmount() {
  let tipAmountMultiplication = billValue * selectedPerecent;
  let result = tipAmountMultiplication / numberOfPeopleValue;
  amount.innerHTML = result;
}

const totalAmount = document.querySelector(".total-amount");
function total() {
  let tipAmountMultiplication = billValue * selectedPerecent;
  let additionTotalAmount = billValue + tipAmountMultiplication;
  let result = additionTotalAmount / numberOfPeopleValue;
  totalAmount.innerHTML = result.toFixed(2);
}

const restbtn = document.querySelector(".reset");

restbtn.addEventListener("click", () => {
  totalAmount.textContent = 0;
  amount.textContent = 0;
  billValue = 0;
  selectedPerecent = 0;
  numberOfPeopleValue = 0;
});
