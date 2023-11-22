import express from "express";
import dotenv from "dotenv";
import path from "path"
import { createServer } from "http";
import { Server } from "socket.io";
import socketConfig from "./socketConfig/ioConfig.js";
import connectDB from "./config/db.js";
import router from "./routes/route.js";
import { notFound,errorHandler } from "./middleware/middlewares.js";

dotenv.config()

connectDB();

const __dirname = path.resolve();

const app = express();
const server = createServer(app)


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './frontend')));


app.use('/api',router)


//* web socket connection
const io = new Server(server,{
    cors:{
        origin:true,
        methods:["GET","POST"]
    }
  });


app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, './frontend', 'index.html'))
);

app.use(notFound);
app.use(errorHandler);


socketConfig(io)


const PORT = process.env.PORT


server.listen(PORT,()=>console.log(`server listening to localhost:${PORT} `))      