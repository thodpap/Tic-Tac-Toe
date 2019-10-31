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
//         console.log(arr[pos.x][pos.y]);
	} 
}  

// Help class

// Create a 2D array
function Create2DArray(rows) {
  var arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}

function checkTicTak(){
    if(checkEnd()){
        if(!num && game){
            console.log("Draw");
            num = true;
        }
        return ;
    }
    let left_down = arr[0][0] + arr[0][1] + arr[0][2];
    let middle_down = arr[1][0] + arr[1][1] + arr[1][2];
    let right_down = arr[2][0] + arr[2][1] + arr[2][2];
    let up = arr[0][0] + arr[1][0] + arr[2][0];
    let middle_up = arr[0][1] + arr[1][1] + arr[2][1];
    let down_up = arr[0][2] + arr[1][2] + arr[2][2]; 
    let diag = arr[0][0] + arr[1][1] + arr[2][2];
    let r_diag = arr[2][0] + arr[1][1] + arr[0][2];
    if(left_down == 3 || middle_down == 3 || right_down == 3 || up == 3 || middle_up == 3 || down_up == 3 || diag == 3 || r_diag == 3){
        console.log("Player 1 won");
        game = false;
    }
    if(left_down == -3 || middle_down == -3 || right_down == -3 || up == -3 || middle_up == -3 || down_up == -3 || diag == -3 || r_diag == -3){
        console.log("Player 2 won");
        game = false;
    }
}
function checkEnd(){
    if(!game){
        return true;
    } 
    for(let i = 0; i <= 2; i++){ 
        for(let j = 0; j <= 2; j++){
            if(arr[i][j] == 0){ 
                return false;
            }
        }
    } 
    return true;
}