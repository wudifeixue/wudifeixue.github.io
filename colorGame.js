var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var levelBtn = document.querySelectorAll(".level");
// var easyButton = document.getElementsByName("easy")[0];
// var hardButton = document.getElementsByName("hard")[0];
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

// easyButton.addEventListener("click", function(){
//   hardButton.classList.remove("selected");
//   easyButton.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColor(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardButton.addEventListener("click", function(){
//   easyButton.classList.remove("selected");
//   hardButton.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColor(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++){
//     squares[i].style.background = colors[i];
//     squares[i].style.display = "block";
//   }
// });

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
  resetButton.textContent = "新游戏";
  message.textContent = "";
}

function setupLevelBtn(){
  //level button event listeners
  for (var i = 0; i < levelBtn.length; i++){
    levelBtn[i].addEventListener("click", function(){
      levelBtn[0].classList.remove("selected");
      levelBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "简单" ? numSquares = 3: numSquares = 6;
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
        displayMessage.textContent = "胜利!";
        resetButton.textContent = "再来一次？";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        displayMessage.textContent = "请再试一次";
        this.style.background = "#232323";
      }
    });
  }
}
