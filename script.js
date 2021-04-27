// Get the element on the page with the id canvas
let canvas = document.querySelector("#canvas");
let currentMandala =  document.getElementById("mandala").src;

canvas.addEventListener("click", function (event) {
  console.log("This is the click event");
  console.log(event);
  let newMandala = document.createElement("div");
  newMandala.classList.add("mandala");

  newMandala.innerHTML = currentMandala;