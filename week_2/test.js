const Guess_number = document.getElementById("js-guess_input");

// slider�� js-range
var slider = document.getElementById("js-range");
// output�� js-title�� �ִ� span
var output = document.getElementById("outputVar");
// max_value�� js-guess_input�� ���� �ִ�
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
    // ���� ������ ���ڰ� machine choose���� ũ�ų� ���ٸ�
    diplaySpan.innerHTML = `
    You choose: ${Guess_num}, the machine choose: ${randomNumber}<br>
    <b>You Won!<b>
    `; // <b>�� ���ڸ� ���� ����.
  } else {
    diplaySpan.innerHTML = `
    You choose: ${Guess_num}, the machine choose: ${randomNumber}<br>
    <b>You lost!<b>
    `;
  }
};

printForm.addEventListener("submit", handlePrint);
