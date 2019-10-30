let height = 600;
let width = 600;
let radius = 50;
let bubbles_red = [];
let bubbles_blue = [];
let player = true;
function setup() { 
	createCanvas(width, height); 
}

function draw() {
	background(0); 
	for(let i = 0; i < bubbles_red.length; i++){
		noStroke();
		fill('red');
		bubbles_red[i].show(); 
	}
	for(let i = 0; i < bubbles_blue.length; i++){
		noStroke();
		fill('blue');
		bubbles_blue[i].show();
	}
	fill(255);
	rect(width/3,0,5,height);
	rect(2*width/3,0,5,height);
	rect(0,height/3,width,5);
	rect(0,2*height/3,width,5);

} 
function mouseDragged() {
	let b = new Bubble(mouseX,mouseY,radius,radius);
	if(player){
		bubbles_red.push(b);
	}
	else{
		bubbles_blue.push(b);
	}
} 
function mouseReleased() {
  locked = false;
  player = !player;
}

class Bubble{
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	}
	move(){
		this.x = this.x + random(-2,2);
		this.y = this.y + random(-2,2);
	}
	show(){
		ellipse(this.x,this.y,this.r,this.r);
	}
}