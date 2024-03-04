
export default function checkResult3x3(board, move, player) {
	const SCORE_TO_WIN = 3;
    let [row, col] = move;
	  let cloneBoard = JSON.parse(JSON.stringify(board));
	  cloneBoard[row][col] = player;
    let rowCount = 0;
    let colCount = 0;
    let diagCount1 = 0;
    let diagCount2 = 0;

    for (let i = 0; i < cloneBoard.length; i++) {
        if (cloneBoard[row][i] === player) rowCount++;
        if (cloneBoard[i][col] === player) colCount++;
        if (cloneBoard[i][i] === player) diagCount1++;
        if (cloneBoard[i][cloneBoard.length - i - 1] === player) diagCount2++;
    }

    if (rowCount === SCORE_TO_WIN || colCount === SCORE_TO_WIN || diagCount1 === SCORE_TO_WIN || diagCount2 === SCORE_TO_WIN) {
        return { isEnd: true, winner: player };
    }
    
	  // Draw
    let isFull = true;
    for (let i = 0; i < cloneBoard.length; i++) {
        for (let j = 0; j < cloneBoard[i].length; j++) {
			      if (i == row && j == col) continue;
            if (!cloneBoard[i][j]) {
                isFull = false;
                break;
            }
        }
        if (!isFull) break;
    }
    if (isFull) {
        return { isEnd: true, winner: null};
    }

    return { isEnd: false, winner: null};	
}
