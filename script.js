// Get the element on the page with the id canvas
let canvas = document.querySelector("#canvas");
let currentMandela =  document.getElementById("mandela").src;;

canvas.addEventListener("click", function (event) {
  console.log("This is the click event");
  console.log(event);
  let newMandela = document.createElement("div");
  newMandela.classList.add("mandela");

  newMandela.innerHTML = currentMandela;