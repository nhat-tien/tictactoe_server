import checkResult3x3 from "../utils/checkResult3x3.js";
import handleMove from "../utils/handleMove.js";

class GameController {

	connection( socket ) {

	console.log("A user connected");

  socket.on("join_room", async ({roomId}) => {
		const ids = await _io.in(roomId).allSockets();
		
		if (ids.size >= 2) {
				socket.emit("error",{ errMsg: "Phòng đã đầy" })
		} else if(ids.size == 1) {
				console.log(`A user joined the room ${roomId}`);
				socket.emit("player", {player: "o"})
				socket.join(roomId);
				_io.in(roomId).emit("ready", { ready: true});
		} else {  
				console.log(`A user joined the room ${roomId}`);
				socket.emit("player", {player: "x"})
				socket.join(roomId);
		}	
		// console.log("number of room " + socket.rooms.size)
		// console.log("room size after " + ids.size);
  });

	socket.on("leave_room", ({ roomId }) => {
		console.log(`A user leaved the room ${roomId}`);
    socket.leave(roomId);
	})

  socket.on("move", ({ roomId, board, move, player }) => {
    let { isEnd, winner } = checkResult3x3(board, move, player);
		if (isEnd) {
      _io.in(roomId).emit("end_game", { winner: winner });
		} else {
    let newBoard = handleMove(board, move, player);  
		player = player === 'x' ? 'o' : 'x'

    // console.log(`play at ${roomId}, turn: ${turn}`);
    _io.in(roomId).emit("update_game", { newBoard: newBoard, player: player });
		};
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
		
  }
}

export default new GameController();
