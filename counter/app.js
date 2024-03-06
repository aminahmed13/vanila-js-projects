let count = 0;

value = document.getElementById("value");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (e) {
  e.addEventListener("click", function (e) {
    const classList = e.currentTarget.classList;
    if (classList.contains("decrease")) {
      count--;
    } else if (classList.contains("reset")) {
      count = 0;
    } else {
      count++;
    }

    value.textContent = count;
    valueColor(count);
  });
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

// decrease.addEventListener("click", function () {
//   let number = parseInt(value.textContent);
//   number -= 1;
//   value.textContent = number;
//   valueColor(number);
// });

// increase.addEventListener("click", function () {
//   let number = parseInt(value.textContent);
//   number += 1;

//   value.textContent = number;
//   valueColor(number);
// });

// reset.addEventListener("click", function () {
//   let number = parseInt(value.textContent);
//   number = 0;

//   value.textContent = number;
//   valueColor(number);
// });

// //#212529 0
// // #2b8a3e >0
// // #c92a2a <0
