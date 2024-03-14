const reviews = [
  {
    id: 1,
    name: "alan smith",
    job: "web developer",
    img: "1.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "scott johnson",
    job: "web designer",
    img: "2.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "3.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "4.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let count = 0;
const review_text = document.getElementById("review");
const arrows = document.querySelectorAll(".fa");
const btn = document.querySelector(".btn");
const uname = document.querySelector(".name");
const position = document.querySelector(".position");
const user_img = document.querySelector(".user-img");

// load initial content
window.addEventListener("DOMContentLoaded", () => {
  changeReview(count);
});

arrows.forEach((e) => {
  e.addEventListener("click", (e) => {
    // if left arrow is clicked we check the current index of the array
    // if its zero, the first element of the array is displayed
    // if its greater than zero, then the element before it is displayed
    if (e.target.classList.contains("left")) {
      if (count === 0) {
        count = reviews.length - 1;
        changeReview(count);
      } else {
        changeReview(count - 1);
        count--;
      }
    } else {
      //if "right arrow is clicked"
      if (count >= reviews.length - 1) {
        //similar logic except that in this case we check if the count is greater than the length of the array
        count = 0;
        changeReview(count);
      } else {
        changeReview(count + 1);
        count++;
      }
    }
  });
});

// if the surprise me butotn is clicked, a random is generated and changeReview function is called
btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 4);
  changeReview(randomNumber);
});

const changeReview = (index) => {
  console.log(index);
  uname.textContent = reviews[index].name;
  position.textContent = reviews[index].job;
  review_text.textContent = reviews[index].text;
  user_img.src = reviews[index].img;
};
