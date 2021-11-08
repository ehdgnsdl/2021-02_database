const Guess_number = document.getElementById("js-guess_input");

// slider은 js-range
var slider = document.getElementById("js-range");
// output은 js-title에 있는 span
var output = document.getElementById("outputVar");
// max_value는 js-guess_input에 들어가는 최댓값
var max_value = document.getElementById("js-guess_input");
slider.onchange = function (event) {
  output.innerHTML = slider.value;
  max_value.max = slider.value;
};

const printForm = document.getElementById("js-guess");
const display = document.getElementById("js-result");
const diplaySpan = display.querySelector("span");

const handlePrint = (e) => {
  e.preventDefault();
  const randomNumber = Math.floor(Math.random() * slider.value);

  const Guess_num = Guess_number.value;

  if (Guess_num >= randomNumber) {
    // 내가 선택한 숫자가 machine choose보다 크거나 같다면
    diplaySpan.innerHTML = `
    You choose: ${Guess_num}, the machine choose: ${randomNumber}<br>
    <b>You Won!<b>
    `; // <b>는 글자를 굵게 해줌.
  } else {
    diplaySpan.innerHTML = `
    You choose: ${Guess_num}, the machine choose: ${randomNumber}<br>
    <b>You lost!<b>
    `;
  }
};

printForm.addEventListener("submit", handlePrint);
