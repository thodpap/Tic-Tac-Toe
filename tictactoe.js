function checkTicTak(){ 
    if(checkEnd()){
        if(!num && game){ 
            alert("Draw");
            num = true;
        } 
    }else{
        let left_down = arr[0][0] + arr[0][1] + arr[0][2];
        let middle_down = arr[1][0] + arr[1][1] + arr[1][2];
        let right_down = arr[2][0] + arr[2][1] + arr[2][2];
        let up = arr[0][0] + arr[1][0] + arr[2][0];
        let middle_up = arr[0][1] + arr[1][1] + arr[2][1];
        let down_up = arr[0][2] + arr[1][2] + arr[2][2]; 
        let diag = arr[0][0] + arr[1][1] + arr[2][2];
        let r_diag = arr[2][0] + arr[1][1] + arr[0][2];
        if(left_down == 3 || middle_down == 3 || right_down == 3 || up == 3 || middle_up == 3 || down_up == 3 || diag == 3 || r_diag == 3){
            // console.log("Player 1 won");
            alert("Player X won");
            game = false;
        }
        if(left_down == -3 || middle_down == -3 || right_down == -3 || up == -3 || middle_up == -3 || down_up == -3 || diag == -3 || r_diag == -3){
            // console.log("Player 2 won");
            alert("Player O Won");
            game = false;
        }
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