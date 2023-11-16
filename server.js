import express from "express";
import dotenv from "dotenv";
import path from "path"

dotenv.config()
const __dirname = path.resolve();
const PORT = process.env.PORT

const app = express();


app.use(express.static(path.join(__dirname, '/views')));

app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
);

app.listen(PORT,()=>console.log(`server listening to localhost:${PORT} `))      