import express  from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import GameController from "./controllers/GameController";


const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

global._io = io;

global._io.on('connection', GameController.connection)


server.listen(5000, () =>
  console.log("server running => http://localhost:5000")
);
