import express  from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import GameService from "./services/GameService.js"


const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

global._io = io;

global._io.on('connection', GameService.connection)


server.listen(5000, () =>
  console.log("server running => http://localhost:5000")
);
