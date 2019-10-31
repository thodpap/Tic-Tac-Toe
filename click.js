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
	if(!arr[pos.x][pos.y] && !checkEnd()){ 
        if(player){
            arr[pos.x][pos.y] = 1;
        }else{
            arr[pos.x][pos.y] = -1;
        }
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
