/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    isValid = false;
    //Row and Column
    for(let i  = 0; i < 9; i++){
        let row = new Map();
        let col = new Map();
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== '.' && row[board[i][j]] != undefined)
                return false;
            else
                row[board[i][j]] = 1;
            if(board[j][i] !== '.' && col[board[j][i]] != undefined)
                return false;
            else
                col[board[j][i]] = 1;  
        }
        delete(row);
        delete(col); 
    }
    //for 3 X 3 grid 
    for(let m = 0; m < 3; m++){
        for(let n = 0; n < 3; n++){
            let grid = new Map();
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(board[i + (m * 3)][j+ (n * 3)] !== '.' 
                    && grid[board[i + (m * 3)][j+ (n * 3)]] != undefined)
                        return false;
                    else
                        grid[board[i + (m * 3)][j+ (n * 3)]] = 1;
                }
            }
            delete(grid);
                
        }
    }
    return true;
};