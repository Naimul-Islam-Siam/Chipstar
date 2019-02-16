var box = document.querySelectorAll(".box");
var result = false;
var currentBox;
var selectedBox;
var rightMost;
var upRightMost;
var upLeftMost;
var gameOver = false;
var gameDraw = false;
var color = "green";

for(var i = 0; i < box.length; i++){
	box[i].style.backgroundColor = '';
}

for(let i = 0; i < box.length; i++){
	box[i].addEventListener("click",function(){
		if(result !== true){
			if(box[i+42] !== undefined && box[i+42].style.backgroundColor === ''){
				box[i+42].style.backgroundColor = color;
				switchColor();
				currentBox = box[i+42].id;
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
			}
			else if(box[i+35] !== undefined && box[i+35].style.backgroundColor == ''){
				box[i+35].style.backgroundColor = color;
				switchColor();
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
			}
			else if(box[i+28] !== undefined && box[i+28].style.backgroundColor === ''){
				box[i+28].style.backgroundColor = color;
				switchColor();
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
			}
			else if(box[i+21] !== undefined && box[i+21].style.backgroundColor === ''){
				box[i+21].style.backgroundColor = color;
				switchColor();
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
			}
			else if(box[i+14] !== undefined && box[i+14].style.backgroundColor === ''){
				box[i+14].style.backgroundColor = color;
				switchColor();
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
			}
			else if(box[i+7] !== undefined && box[i+7].style.backgroundColor === ''){
				box[i+7].style.backgroundColor = color;
				switchColor();
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
			}
			else{
				box[i].style.backgroundColor = color;
				switchColor();
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
		color = "red";
	}
	else if(color == "red"){
		color = "green";
	}
}

function getColor(i,j){
	if(i < 7 || j < 7){
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
			if(a >= 0 && b < 6){
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
	if(getColor(a,b) !== "" &&
		getColor(a,b) === getColor(a,b-1) &&
		getColor(a,b) === getColor(a,b-2) && 
		getColor(a,b) === getColor(a,b-3)
		){

		result = true;
	}
	return result;
}

function checkDownSide(a, b){
	if(getColor(a,b) !== "" &&
		getColor(a,b) === getColor(a+1,b) &&
		getColor(a,b) === getColor(a+2,b) &&
		getColor(a,b) === getColor(a+3,b)
		){

		result = true;
	}
	return result;
}

function checkDownRightDiagonal(a, b){
	if(getColor(a,b) !== "" &&
		getColor(a,b) === getColor(a+1,b+1) &&
		getColor(a,b) === getColor(a+2,b+2) &&
		getColor(a,b) === getColor(a+3,b+3)
		){

		result = true;
	}
	return result;
}

function checkDownLeftDiagonal(a, b){
	if(getColor(a,b) !== "" &&
		getColor(a,b) === getColor(a+1,b-1) &&
		getColor(a,b) === getColor(a+2,b-2) && 
		getColor(a,b) === getColor(a+3,b-3)
		){

		result = true;
	}
	return result;
}


// findRight(selectedBox.row, selectedBox.column);
// checkLeftSide(rightObj().row, rightObj().column);

// findUpRight(selectedBox.row, selectedBox.column);
// checkDownLeftDiagonal(upRightObj().row, upRightObj().column);

// findUpLeft(selectedBox.row, selectedBox.column);
// checkDownRightDiagonal(upLeftObj().row, upLeftObj().column);

//function decision(row,column){
// 	for(var row = 1; row <= 7; row++){
// 		for(var column = 1; column <= 7; column++){
// 			if(checkRightSide(row,column) == true){
// 				gameOver = true;
// 			}
// 			else if(checkLeftSide(row,column) == true){
// 				gameOver = true;
// 			}
// 			else if(checkUpSide(row,column) == true){
// 				gameOver = true;
// 			}
// 			else if(checkDownSide(row,column) == true){
// 				gameOver = true;
// 			}
// 			else if(checkUpRightDiagonal(row,column) == true){
// 				gameOver = true;
// 			}
// 			else if(checkUpLeftDiagonal(row,column) == true){
// 				gameOver = true;
// 			}
// 			else if(checkDownRightDiagonal(row,column) == true){
// 				gameOver = true;
// 			}
// 			else if(checkDownLeftDiagonal(row,column) == true){
// 				gameOver = true;
// 			}
// 		}
// 	}
// }


// if(checkRightSide(i,j) ||
// 		checkLeftSide(i,j) ||
// 		checkUpSide(i,j) ||
// 		checkDownSide(i,j) ||
// 		checkUpRightDiagonal(i,j) ||
// 		checkUpLeftDiagonal(i,j) ||
// 		checkDownRightDiagonal(i,j) ||
// 		checkDownLeftDiagonal(i,j)
// 		){
// 		result = true;
// 	}

		// var box_i_j = document.querySelector("#b"+i+j);
		// if(box_i_j.style.backgroundColor === box_i_j+1.style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box_i_j+2.style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box_i_j+3.style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box_i_j+4.style.backgroundColor){

		// 	result = true;
		// }
		// else if(box_i_j.style.backgroundColor === box_i_j-1.style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box_i_j-2.style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box_i_j-3.style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box_i_j-4.style.backgroundColor){
			
		// 	result = true;
		// }
		// else if(box_i_j.style.backgroundColor === box[i+1][j].style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box[i+2][j].style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box[i+3][j].style.backgroundColor &&
		// 	box_i_j.style.backgroundColor === box[i+4][j].style.backgroundColor){
			
		// 	result = true;
		// }
		// else if(box[i][j].style.backgroundColor === box[i-1][j].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-2][j].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-3][j].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-4][j].style.backgroundColor){
			
		// 	result = true;
		// }
		// else if(box[i][j].style.backgroundColor === box[i+1][j+1].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i+2][j+2].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i+3][j+3].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i+4][j+4].style.backgroundColor){
			
		// 	result = true;
		// }
		// else if(box[i][j].style.backgroundColor === box[i+1][j-1].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i+2][j-2].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i+3][j-3].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i+4][j-4].style.backgroundColor){
			
		// 	result = true;
		// }
		// else if(box[i][j].style.backgroundColor === box[i-1][j+1].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-2][j+2].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-3][j+3].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-4][j+4].style.backgroundColor){
			
		// 	result = true;
		// }
		// else if(box[i][j].style.backgroundColor === box[i-1][j-1].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-2][j-2].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-3][j-3].style.backgroundColor &&
		// 	box[i][j].style.backgroundColor === box[i-4][j-4].style.backgroundColor){
			
		// 	result = true;
		// }

// for(i = 0; i < box.length; i++){
// 	if(box[i].style.backgroundColor === box[i+1].style.backgroundColor &&
// 		box[i].style.backgroundColor === box[i+2].style.backgroundColor &&
// 		box[i].style.backgroundColor === box[i+3].style.backgroundColor &&
// 		box[i].style.backgroundColor === box[i+4].style.backgroundColor){

// 		result = true;
// 	}
// }

// if(result === true){
// 	alert("result yes");
// }