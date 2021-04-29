
let canvas = document.querySelector("#canvas");

canvas.addEventListener("click", function (event) {
  console.log("clicking the canvas");

  let art = new Array('images/piano.png','images/blue.png',
                      'images/blue2.png','images/blue3.png','images/blue4.png',
                      'images/green.png', 'images/green2.png', 'images/green4.png',
                      'images/doodle1.png','images/doodle2.png','images/doodle3.png',
                      'images/doodle4.png','images/doodle5.png','images/doodle6.png',
                      'images/doodle7.png','images/doodle8.png','images/doodle9.png' ); 

  let currentArt = art[Math.floor(Math.random() * art.length)];
  var divsize = 100;
  var posx = (Math.random() * window.innerWidth - divsize).toFixed();
  var posy = (Math.random() * window.innerHeight - divsize).toFixed();

  imgArray = new Image();
  imgArray.classList.add("imgArray");
  imgArray.src = currentArt;

  imgArray.style.left = posx + "px";
  imgArray.style.top = posy + "px";
  imgArray.style.position = "fixed";
  imgArray.style.width = Math.floor((Math.random()*180)+150)+"px";

  canvas.appendChild(imgArray);
})

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function (event) {

  console.log("clicking the clear button");
  canvas.innerHTML = " ";

 });

let shuffleButton = document.querySelector(".shuffle");
shuffleButton.addEventListener("click", function (event) {
  console.log("clicking the suffle button");

  Array.from(document.querySelectorAll("imgArray")).forEach(function() {
  this.style.display = "none";

  var posx = Math.floor(Math.random()*300)+"px";
  var posy = Math.floor(Math.random()*300)+"px";
  imgArray.style.top = posx + "px";
  imgArray.style.left = posy + "px";

  canvas.innerHTML = "imgArray ";


 });