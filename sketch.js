let height = 600;
let width = 600;
let radius = 100;
let bubbles_red = [];
let cross_blue = [];
let player = true;   
let arr = Create2DArray(3);
let dif = 30;

function setup() { 
	createCanvas(width, height);
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			arr[i][j] = false;
		}
	}  
}

function draw() {
	background(0);  
	fill('white');
	rect(width/3,0,5,height);
	fill('white');
	rect(2*width/3,0,5,height);
	fill('white');
	rect(0,height/3,width,5);
	fill('white');
	rect(0,2*height/3,width,5);

	for(let i = 0; i < bubbles_red.length; i++){
		bubbles_red[i].show(); 
	}
	for(let i = 0; i < cross_blue.length; i++){ 
		cross_blue[i].show();
	}
} 
function mouseClicked(){ 
	let pos = new Block(0,0); 
	let valid = false;
	if(0 <= mouseX && mouseX < width/3){
		pos.x = 0;
	} else if(width / 3 <= mouseX && mouseX < 2 * width / 3){
		pos.x = 1;
	}else{
		pos.x = 2;
	}
	if(0 <= mouseY && mouseY < height/3){
		pos.y = 0;
	} else if(height / 3 <= mouseY && mouseY < 2 * height / 3){
		pos.y = 1;
	}else{
		pos.y = 2;
	}
	// console.log(pos);
	if(!arr[pos.x][pos.y]){
		arr[pos.x][pos.y] = true;
		if(!player){
			let b = new Bubble(pos,radius);
			bubbles_red.push(b);
		}else{
			let c = new Cross(pos);
			cross_blue.push(c);
		}
		player = !player;
	} 
}  
class Bubble{
	constructor(pos,r){
		this.x = pos.x;
		this.y = pos.y;
		this.r = r;
	}
	// move(){
	// 	this.x = this.x + random(-2,2);
	// 	this.y = this.y + random(-2,2);
	// }
	/*
	0 - 0->  center: 100,100
	1 - 0->  center: 300, 100
	--> 100 + pos.x * 200
	200 is width/3 
	100 is widht/6
	and 100 + pos.y * 200  
	*/
	show(){ 
		noStroke();
		fill('red');
		ellipse(width/6 + this.x*width/3,height/6 + height/3*this.y,this.r,this.r);
	}
}

class Cross{
	constructor(pos){
		this.x = pos.x;
		this.y = pos.y;
	}
	show(){
		strokeWeight(4);
		stroke('blue');
		line(this.x*width/3 + dif,this.y*height/3 + dif,(this.x + 1)*width/3 - dif,(this.y+1)*height/3 - dif);
		strokeWeight(4);
		stroke('blue');
		line((this.x+1)*width/3 - dif,this.y*height/3 + dif,this.x*width/3 + dif,(1+this.y)*height/3 - dif);
	}
}
// Help class
class Block{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}
// Create a 2D array
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function checkTicTak(){

}