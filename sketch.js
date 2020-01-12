let width = 300;
let height = 300;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let human = 'X';
let ai = 'O';
let play = true;  
function setup() {
  createCanvas(width, height);
}

function draw() {
  background(220);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = width / 3;
      let y = height / 3;
      let w = width / 6;
      let h = height / 6;
      textSize(32);
      strokeWeight(4);
      if (board[i][j] == human) {
        drawX(x,y,w,h,i,j);
      } else if (board[i][j] == ai) {
        noFill();
        ellipse(x * i + w, y * j + h, 60);
      }
    }
  }
  drawLines(); 
    
  let result = checkWinner();
  if(result != null){
     noLoop();
    console.log(result);
  }
  
}
function mousePressed() {
  let x = floor(mouseX * 3 / width);
  let y = floor(mouseY * 3 / height);
  if(board[x][y] == ''){
    if(play){
      board[x][y] = human; 
      play = !play;
      bestMove();
    }
  }
}
function bestMove(){ 
  let bScore = -Infinity;
  let move_x,move_y;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(board[i][j] == ''){
        board[i][j] = ai;
        let score = minimax(board,false);
        board[i][j] = ''; 
        if(bScore < score){
          bScore = score;
          move_x = i; move_y = j;
        }
      }
    }
  }
  if(checkWinner() == null){
    board[move_x][move_y] = ai;
    play = !play;
  }
}
let scores = {
  X: -10,
  O: 10,
  tie: 0
};
function minimax(board,play){
  let check = checkWinner();
  if(check != null){
    return scores[check];
  }
  if(play){ // if ai plays
    let bScore = -Infinity;
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if(board[i][j] == ''){
          board[i][j] = ai;
          let score = minimax(board,false);
          board[i][j] = '';
          bScore = max(bScore,score);
        }
      }
    }
    return bScore;
  }else{
    let bScore = Infinity;
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if(board[i][j] == ''){
          board[i][j] = human;
          let score = minimax(board,true);
          board[i][j] = '';
          bScore = min(bScore,score);
        }
      }
    }
    return bScore;
  }
} 
function equal3(a,b,c){
  return a != '' && a == b && b == c;
}
function checkWinner(){
  for(let i = 0; i < 3; i++){
    if(equal3(board[i][0],board[i][1],board[i][2]))
      return board[i][0];
    if(equal3(board[0][i],board[1][i],board[2][i]))
      return board[0][i];
  }
  if(equal3(board[0][0],board[1][1],board[2][2]))
    return board[0][0];
  if(equal3(board[2][0],board[1][1],board[0][2]))
    return board[1][1];
  let count = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(board[i][j] != '')
        count++;
    }
  }
  if(count == 9)
    return 'tie';
  
  return null;
  
}
function drawLines(){
  line(0,height/3,width,height/3);
  line(0,2 * height/3,width, height * 2 / 3);
  line(width/3,0,width/3,height);
  line(2 * width/3,0,2 * width/3,height);
}
function drawX(x,y,w,h,i,j) {
  let x_start_1 = x * i + w / 2;
  let y_start_1 = y * j + h / 2;
  let x_end_1 = x * (i + 1) - w / 2;
  let y_end_1 = y * (j + 1) - h / 2;
  line(x_start_1, y_start_1, x_end_1, y_end_1);
  let x_start_2 = x * (i + 1) - w / 2;
  let y_start_2 = y * j + h / 2;
  let x_end_2 = x * i + w / 2;
  let y_end_2 = y * (j + 1) - h / 2;
  line(x_start_2, y_start_2, x_end_2, y_end_2);
}
