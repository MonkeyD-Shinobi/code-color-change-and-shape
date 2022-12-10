import "./styles.css";

var outerdiv = document.getElementById("outer");
var inner = document.getElementById("inner");
var click1 = document.getElementById("bt1");
var click2 = document.getElementById("bt2");

let colorArray = ["red", "pink", "yellow", "purple", "blue", "orange"];

let shapeArray = ["oval", "circle", "square", "rectangle"];

function ran(n) {
  return Math.floor(Math.random() * n);
}

click1.addEventListener("click", function () {
  let num = colorArray.length;
  let changeColorIndex = ran(num);
  outerdiv.style.backgroundColor = colorArray[changeColorIndex];
  console.log("color index", changeColorIndex);
});

click2.addEventListener("click", function () {
  let num = shapeArray.length;
  let shapeIndex = ran(num);
  console.log("shape index", shapeIndex);

  inner.className = shapeArray[shapeIndex];
});
