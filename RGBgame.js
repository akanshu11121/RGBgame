var mode = 6
var colors = []
var pickedColor

var squares = document.querySelectorAll(".square") 
var colorDisplay = document.getElementById("colorDisplay")
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var level = document.querySelectorAll(".level")
var sqrs = document.querySelectorAll(".sqr")

init()

function init(){
	setUpModeButtons()
	setUpSquares()
	reset_all()
}

function setUpModeButtons(){
	for(var i=0;i<level.length;i++){
		level[i].addEventListener("click",function(){
			level[0].classList.remove("selected")
			level[1].classList.remove("selected")
			this.classList.add("selected")
			this.textContent === "EASY" ? mode = 3: mode = 6
			reset_all()
			})	
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor

			if(clickedColor === pickedColor){
				message.textContent = "Correct"
				reset.textContent = "Play Again"
				changeColors(clickedColor)
				h1.style.backgroundColor = clickedColor
				reset.textContent = "Play Again"
			}
			else{
				this.style.backgroundColor = "#232323"
				message.textContent = "Try Again"
			}

		})
	}
}

function reset_all(){
	colors = generateRandomColors(mode);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
	// setUpSqrs()
	reset.textContent = "New Colours"
	message.textContent = ""
	for(var i =0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block "
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = "none"
		}
	}
	h1.style.backgroundColor = "steelblue"
	setUpSqrs()
}

reset.addEventListener("click",function(){
	reset_all()
})

function changeColors (color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
	var arr = []
	for(var i =0;i<num;i++){
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb("+r+", "+g+", "+b+")"
}

function setUpSqrs(){

	var ques = pickedColor
	var apply = []
	ques = ques.substr(0,ques.length-1)
	ques = ques.substr(4)
	
	apply = ques.split(", ")

	var clrs = ["rgb("+apply[0]+", 0, 0)","rgb(0, "+apply[1]+", 0)","rgb(0 , 0, "+apply[2]+")"]

	for (var i = 0; i < sqrs.length; i++) {
		sqrs[i].style.backgroundColor = clrs[i]
	}
}