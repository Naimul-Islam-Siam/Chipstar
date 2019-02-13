var box = document.querySelectorAll(".box");
var result = false;

for(var i = 0; i < box.length; i++){
	box[i].style.backgroundColor = 'white';
}

for(let i = 0; i < box.length; i++){
	box[i].addEventListener("click",function(){
		if(box[i+42] !== undefined && box[i+42].style.backgroundColor === 'white'){
			box[i+42].style.backgroundColor = 'green';
		}
		else if(box[i+35] !== undefined && box[i+35].style.backgroundColor == 'white'){
			box[i+35].style.backgroundColor = 'green';
		}
		else if(box[i+28] !== undefined && box[i+28].style.backgroundColor === 'white'){
			box[i+28].style.backgroundColor = 'green';
		}
		else if(box[i+21] !== undefined && box[i+21].style.backgroundColor === 'white'){
			box[i+21].style.backgroundColor = 'green';
		}
		else if(box[i+14] !== undefined && box[i+14].style.backgroundColor === 'white'){
			box[i+14].style.backgroundColor = 'green';
		}
		else if(box[i+7] !== undefined && box[i+7].style.backgroundColor === 'white'){
			box[i+7].style.backgroundColor = 'green';
		}
		else{
			box[i].style.backgroundColor = 'green';
		}
	});
}

function getColor(number){
	return document.querySelector("#b"+number).style.backgroundColor;
}

// for(var i = 0; i < 7; i++){
// 	for(var j = 0; j < 7; j++){
// 		if(box[i][j].style.backgroundColor === box[i][j+1].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i][j+2].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i][j+3].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i][j+4].style.backgroundColor){

// 			result = true;
// 		}
// 		else if(box[i][j].style.backgroundColor === box[i][j-1].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i][j-2].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i][j-3].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i][j-4].style.backgroundColor){
			
// 			result = true;
// 		}
// 		else if(box[i][j].style.backgroundColor === box[i+1][j].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+2][j].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+3][j].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+4][j].style.backgroundColor){
			
// 			result = true;
// 		}
// 		else if(box[i][j].style.backgroundColor === box[i-1][j].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-2][j].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-3][j].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-4][j].style.backgroundColor){
			
// 			result = true;
// 		}
// 		else if(box[i][j].style.backgroundColor === box[i+1][j+1].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+2][j+2].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+3][j+3].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+4][j+4].style.backgroundColor){
			
// 			result = true;
// 		}
// 		else if(box[i][j].style.backgroundColor === box[i+1][j-1].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+2][j-2].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+3][j-3].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i+4][j-4].style.backgroundColor){
			
// 			result = true;
// 		}
// 		else if(box[i][j].style.backgroundColor === box[i-1][j+1].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-2][j+2].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-3][j+3].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-4][j+4].style.backgroundColor){
			
// 			result = true;
// 		}
// 		else if(box[i][j].style.backgroundColor === box[i-1][j-1].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-2][j-2].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-3][j-3].style.backgroundColor &&
// 			box[i][j].style.backgroundColor === box[i-4][j-4].style.backgroundColor){
			
// 			result = true;
// 		}

// 	}
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