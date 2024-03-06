value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", function () {
  let number = parseInt(value.textContent);
  number -= 1;
  value.textContent = number;
  valueColor(number);
});

increase.addEventListener("click", function () {
  let number = parseInt(value.textContent);
  number += 1;

  value.textContent = number;
  valueColor(number);
});

reset.addEventListener("click", function () {
  let number = parseInt(value.textContent);
  number = 0;

  value.textContent = number;
  valueColor(number);
});

// function to change the color of the value
const valueColor = (num) => {
  if (num > 0) {
    value.style.color = "#2b8a3e";
  } else if (num == 0) {
    value.style.color = "#212529";
  } else {
    value.style.color = "#c92a2a";
  }
};

//#212529 0
// #2b8a3e >0
// #c92a2a <0
