public class Solution {
    public bool IsValidSudoku(char[][] board) {
          
        //rows check
        for(int row = 0 ; row < 9 ; row++) {
            HashSet<char> rowsSeen = new();
                for (int col = 0 ; col < 9 ; col++){
                    if(board[row][col] == '.'){
                        continue;
                    }
                    if(rowsSeen.Contains(board[row][col])){
                        return false;
                    }
                    rowsSeen.Add(board[row][col]);
                } 
        }
        //cols check
        for(int col = 0 ;col<9; col++){
            HashSet<char> colSeen = new();
            for (int row = 0 ; row < 9 ; row++){
                    if(board[row][col] == '.'){
                        continue;
                    }
                    if(colSeen.Contains(board[row][col])){
                        return false;
                    }
                    colSeen.Add(board[row][col]);
                }
        }
        //square check
        for(int row = 0 ; row < 9 ; row+=3){
            for(int col = 0 ; col < 9; col+=3){
                HashSet<char> squareSeen = new();
                for(int i = row ; i< row + 3 ; i++){
                    for (int j=col ; j< col + 3 ; j++){
                        if(board[i][j] == '.'){
                            continue;
                        }
                        if(squareSeen.Contains(board[i][j])){
                            return false;
                        }
                        squareSeen.Add(board[i][j]);
                    }
                }
            }
        }

        return true;
}
}

    

