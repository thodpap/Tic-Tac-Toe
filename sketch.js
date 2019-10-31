let height = 600;
let width = 600;
let radius = 120;
let bubbles_red = [];
let cross_blue = [];
let player = true;   
let arr = Create2DArray(3);
let dif = 30;
let game = true;
let num = false;

function setup() { 
	createCanvas(width, height);
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			arr[i][j] = 0;
		}
	}  
	alert("Tic-Tak-Toe game");
} 
function draw() {
	background(0);  
    printLines(); 
	for(let i = 0; i < bubbles_red.length; i++){
		bubbles_red[i].show(); 
	}
	for(let i = 0; i < cross_blue.length; i++){ 
		cross_blue[i].show();
	}  
	
    checkTicTak(arr);  
} 