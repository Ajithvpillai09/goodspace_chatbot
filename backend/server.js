import express from "express";
import dotenv from "dotenv";
import path from "path"
import { createServer } from "http";
import { Server } from "socket.io";
import socketConfig from "./socketConfig/ioConfig.js";
import connectDB from "./config/db.js";
dotenv.config()

connectDB();

const __dirname = path.resolve();

const app = express();
const server = createServer(app)

//* web socket connection
const io = new Server(server,{
    cors:{
        origin:true,
        methods:["GET","POST"]
    }
  });

app.use(express.static(path.join(__dirname, './frontend')));

app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, './frontend', 'index.html'))
);

socketConfig(io)

const PORT = process.env.PORT


server.listen(PORT,()=>console.log(`server listening to localhost:${PORT} `))      