

export default function handleMove(board, move, player) {
	const cloneBoard = JSON.parse(JSON.stringify(board));
	const [row, col] = move;
  cloneBoard[row][col] = player
  return cloneBoard;
}
