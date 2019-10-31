function Bubble(pos,r){ 
	this.x = pos.x;
	this.y = pos.y;
	this.r = r;

	this.show = function(){ 
		noStroke();
		fill('red');
		ellipse(width/6 + this.x*width/3,height/6 + height/3*this.y,this.r,this.r);
	}
}