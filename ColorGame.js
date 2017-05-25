var numSquares = 6;
var pickedColor;
var colors = [];

var squares = document.getElementsByClassName('square');
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  //mode button event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected");

      //same as if statement and good if you only have two possible outcomes
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    })
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //backgroundColor is compatible with more browsers
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of picked square
      var clickedColor = this.style.backgroundColor;

      //if set backgroundColor = #232323
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  }
};

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
})

function changeColors(color) {
  //loop through all squares
  //change each color to match
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  //make an array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }

  //return array
  return arr;
}

function randomColor() {
  //pick a "red" from  0 - 255
  var r = Math.floor(Math.random() * 256)

  //pick a "green" from  0 - 255
  var g = Math.floor(Math.random() * 256)

  //pick a "blue" from  0 - 255
  var b = Math.floor(Math.random() * 256)

  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";

}


// ALL THIS WAS CLEANED UP WITH THE reset();
// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })
//
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//     }
// });
