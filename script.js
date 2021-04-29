// // Get the element on the page with the id canvas
// let canvas = document.querySelector("#canvas");
// let currentMandala =  document.getElementById("mandala").src;

// canvas.addEventListener("click", function (event) {
//   console.log("This is the click event");
//   console.log(event);
//   let newMandala = document.createElement("div");
//   newMandala.classList.add("mandala");

//   newMandala.innerHTML = currentMandala;

let canvas = document.querySelector("#canvas");

canvas.addEventListener("click", function (event) {
  console.log("clicking the canvas");

  let art = new Array('images/piano.png','images/art2.png','images/blue.png',
                      'images/blue2.png','images/blue3.png','images/blue4.png',
                      'images/green.png', 'images/green2.png', 'images/green4.png' ); 

  let currentArt = art[Math.floor(Math.random() * art.length)];
  var divsize = 100;
  var posx = (Math.random() * window.innerWidth - divsize).toFixed();
  var posy = (Math.random() * window.innerHeight - divsize).toFixed();

  imgArray = new Image();
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
  canvas.innerHTML = "currentArt";

 });



  /********************
  TODO: Position the new Art so that it's where the mouse cursor is when you clicked
 *********************
  Hint: Look up the pageX and pageY property of the event:
  https://www.w3schools.com/jsref/event_pagex.asp
  And remember that to position html elements with the "left" and "top" you need to add a unit like "px" at the end!
   */

  // var x = event.pageX;
  // var y = event.pageY;
  // newArt.style.top = y + "px";
  // newArt.style.left = x + "px";

  // canvas.appendChild(newArt);var x = event.pageX;
  // var y = event.pageY;
  // newArt.style.top = y + "px";
  // newArt.style.left = x + "px";

  // canvas.appendChild(newArt);


// });
