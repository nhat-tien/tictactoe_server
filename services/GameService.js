import checkResult from "../utils/checkResult.js";
import handleMove from "../utils/handleMove.js";

class GameService {

	connection( socket ) {

	console.log("A user connected");

  socket.on("join_room", async ({roomId}) => {
		const ids = await _io.in(roomId).allSockets();
		
		if (ids.size >= 2) {
				socket.emit("error",{ errMsg: "Phòng đã đầy" })
		} else if(ids.size == 1) {
				console.log(`A user joined the room ${roomId}`);
				socket.join(roomId);
				_io.in(roomId).emit("ready", { ready: true});
		} else {  
				console.log(`A user joined the room ${roomId}`);
				socket.join(roomId);
		}	
		// console.log("number of room " + socket.rooms.size)
		// console.log("room size after " + ids.size);
  });

  socket.on("move", ({ roomId, board, move, turn }) => {
  //   let { isEnd, result } = checkResult(board, move, turn);
		// if (isEnd) {
  //     socket.broadcast.to(roomId).emit("end_game", { result });
		// } else {
		// let { newBoard, newTurn } = handleMove(board, move, turn);  
  //   // console.log(`play at ${roomId}, turn: ${turn}`);
  //   socket.broadcast.to(roomId).emit("update_game", { newBoard, newTurn });
		// };
    socket.broadcast.to(roomId).emit("update_game", { board, turn });
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
		
  }
}

export default new GameService();
