function Cross(pos){
	this.x = pos.x;
	this.y = pos.y;

	this.show = function(){
		strokeWeight(4);
		stroke('blue');
		line(this.x*width/3 + dif,this.y*height/3 + dif,(this.x + 1)*width/3 - dif,(this.y+1)*height/3 - dif);
		strokeWeight(4);
		stroke('blue');
		line((this.x+1)*width/3 - dif,this.y*height/3 + dif,this.x*width/3 + dif,(1+this.y)*height/3 - dif);
	}
}