var box = document.querySelectorAll(".box");
var result = false;
var currentBox;
var selectedBox;
var gameOver = false;
var gameDraw = false;
var winner = null;
var count = 0;
var color = "green";
var score1 = 0;
var score2 = 0;
var message = document.querySelector(".message");
var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var btn1ScoreDisplay = document.querySelector(".btn-score-1");
var btn2ScoreDisplay = document.querySelector(".btn-score-2");

btn1.classList.add("selected");

for(var i = 0; i < box.length; i++){
	box[i].style.backgroundColor = '';
}

btn1.addEventListener("click",function(){
	if(count < 1){
		color = "green";
		btn1.classList.add("selected");
		btn2.classList.remove("selected");
	}
});

btn2.addEventListener("click",function(){
	if(count < 1){
		color = "red";
		btn2.classList.add("selected");
		btn1.classList.remove("selected");
	}
});

for(let i = 0; i < box.length; i++){
	box[i].addEventListener("click",function(){
		if(result !== true && gameDraw !== true){
			count++;
			if(box[i+35] !== undefined && box[i+35].style.backgroundColor == ''){
				box[i+35].style.backgroundColor = color;

				currentBox = box[i+35].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+28] !== undefined && box[i+28].style.backgroundColor === ''){
				box[i+28].style.backgroundColor = color;
				
				currentBox = box[i+28].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+21] !== undefined && box[i+21].style.backgroundColor === ''){
				box[i+21].style.backgroundColor = color;
				
				currentBox = box[i+21].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+14] !== undefined && box[i+14].style.backgroundColor === ''){
				box[i+14].style.backgroundColor = color;
				
				currentBox = box[i+14].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+7] !== undefined && box[i+7].style.backgroundColor === ''){
				box[i+7].style.backgroundColor = color;
				
				currentBox = box[i+7].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else{
				box[i].style.backgroundColor = color;
				
				currentBox = box[i].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
		}
	});
}


function findPosition(str){
	var processed = str.split("b");
	var proArr = processed[1].split("-");
	var i = Number(proArr[0]);
	var j = Number(proArr[1]);
	Obj = function(){
		var row = i;
		var column = j;
		return{
			row : row,
			column : column
		};
	};
}

function switchColor(){
	if(color == "green"){
		if(result !== true && gameDraw !== true){
			color = "red";
			message.textContent = "It's " + color + " 's Turn";
			btn1.classList.remove("selected");
			btn2.classList.add("selected");
		}
	}
	else if(color == "red"){
		if(result !== true && gameDraw !== true){
			color = "green";
			message.textContent = "It's " + color + " 's Turn";
			btn2.classList.remove("selected");
			btn1.classList.add("selected");
		}
	}
}

function getColor(i,j){
	if(i < 6 || j < 7){
		return document.querySelector("#b" + i + "-" + j).style.backgroundColor;
	}
}

function findRight(a, b){
	if(b < 6){
		while(getColor(a,b) === getColor(a,b+1)){
			a = a;
			b = b+1;
			if(b < 6){
				findRight(a, b);
			}
			else{
				break;
			}
		}
	}
	else{
		b = 6;
	}

	rightObj = function(){
		var rowR = a;
		var columnR = b;

		return{
			rowR : rowR,
			columnR : columnR
		};
	};
}

function findUpRight(a, b){
	if(a > 0 && b < 6){
		while(getColor(a,b) === getColor(a-1,b+1)){
			a = a-1;
			b = b+1;
			if(a > 0 && b < 6){
				findUpRight(a, b);
			}
			else{
				break;
			}
		}
	}
	if(a == 0){
		a = 0;
	}
	if(b == 6){
		b = 6;
	}
	
	upRightObj = function(){
		var rowUR = a;
		var columnUR = b;

		return{
			rowUR : rowUR,
			columnUR : columnUR
		};
	};
}

function findUpLeft(a, b){
	if(a > 0 && b > 0){
		while(getColor(a,b) === getColor(a-1,b-1)){
			a = a-1;
			b = b-1;
			if(a > 0 && b > 0){
				findUpLeft(a, b);
			}
			else{
				break;
			}
		}
	}
	if(a == 0){
		a = 0;
	}
	if(b == 0){
		b = 0;
	}
	
	upLeftObj = function(){
		var rowUL = a;
		var columnUL = b;

		return{
			rowUL : rowUL,
			columnUL : columnUL
		};
	};
}


function checkLeftSide(a, b){
	if(b > 2){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a,b-1) &&
			getColor(a,b) === getColor(a,b-2) && 
			getColor(a,b) === getColor(a,b-3)
			){

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner + " you won!";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDownSide(a, b){
	if(a < 3){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a+1,b) &&
			getColor(a,b) === getColor(a+2,b) &&
			getColor(a,b) === getColor(a+3,b)
			){

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner + " you won!";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDownRightDiagonal(a, b){
	if(a < 3 && b < 4){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a+1,b+1) &&
			getColor(a,b) === getColor(a+2,b+2) &&
			getColor(a,b) === getColor(a+3,b+3)
			){

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner + " you won!";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDownLeftDiagonal(a, b){
	if(a < 3 && b > 2){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a+1,b-1) &&
			getColor(a,b) === getColor(a+2,b-2) && 
			getColor(a,b) === getColor(a+3,b-3)
			){

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner + " you won!";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDraw(i){
	if(i == 42){
		gameDraw = true;
		message.textContent = "Match Draw!";
		btn1.classList.remove("selected");
		btn2.classList.remove("selected");
	}
	else{
		gameDraw = false;
	}

	return gameDraw;
}

function winnerScore(winner){
	if(winner === "green"){
		score1++;
		btn1ScoreDisplay.textContent = score1;
	}

	if(winner === "red"){
		score2++;
		btn2ScoreDisplay.textContent = score2;
	}	
}
