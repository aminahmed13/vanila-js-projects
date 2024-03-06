const colors = ["green", "red", "rgba(133,122,200)", "#e71075"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

const container = document.querySelector(".container");
// btn.addEventListener("click", function () {
//   //generate random between between 0 and 3

const simple_function = () => {
  const randomNumber = Math.floor(Math.random() * 4);

  color.style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];

  document.body.style.backgroundColor = colors[randomNumber];
};

const hex_function = () => {
  let result = [];
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let n = 0; n < 6; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  console.log(result.join(""));
  const randomColor = `#${result.join("")}`;
  color.style.color = randomColor;
  color.textContent = randomColor.toUpperCase();
  document.body.style.backgroundColor = randomColor;
};
