var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var levelBtn = document.querySelectorAll(".level");
var colorGame = {};

colorGame.init = function(){
  setupLevelBtn();
  setupSquares();
  reset();
}
colorGame.init();

resetButton.addEventListener("click",function(){
  reset();
});

function changeColors(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 to 255
  r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " +b +")";
}

function reset(){
  //generate all new colors
  colors = generateRandomColor(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  resetButton.textContent = "New Game";
  message.textContent = "";
}

function setupLevelBtn(){
  //level button event listeners
  for (var i = 0; i < levelBtn.length; i++){
    levelBtn[i].addEventListener("click", function(){
      levelBtn[0].classList.remove("selected");
      levelBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++){
    //Add click events to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if (clickedColor === pickedColor){
        displayMessage.textContent = "You win!";
        resetButton.textContent = "Try again？";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        displayMessage.textContent = "Please try again";
        this.style.background = "#232323";
      }
    });
  }
}
