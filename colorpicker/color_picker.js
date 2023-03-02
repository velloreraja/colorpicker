let bgcolor_change = document.getElementById("bgcolor_change");
let colorNameChange = document.getElementById("change_color_name");
let button = document.getElementById("random_color");
let hexbutton = document.querySelector(".hex");
let button1 = document.querySelector(".simple_hex");
let button2 = document.querySelector(".simple_hex_change");

const colors = [
  "red",
  "blue",
  "orange",
  "yellow",
  "Chartreuse",
  "Crimson",
  "LightGray",
  "coral",
];
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", function () {
  let randomColor = colorPick();
  console.log(randomColor);
  bgcolor_change.style.backgroundColor = colors[randomColor];
  colorNameChange.textContent = colors[randomColor];
});

function colorPick() {
  return Math.floor(Math.random() * colors.length);
}

//hex color picker
button2.addEventListener("click", function () {
  colorNameChange.textContent = "#F5F5F5";
  bgcolor_change.style.backgroundColor = "whitesmoke";
  button2.className = "active";
  button1.classList.remove("active");

  hexbutton.addEventListener("click", function () {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[ran_color()];
    }
    colorNameChange.textContent = hexcolor;
    bgcolor_change.style.backgroundColor = hexcolor;
  });

  function ran_color() {
    return Math.floor(Math.random() * hex.length);
  }
});
