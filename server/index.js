import express from "express";
import cors from "cors";
import Conn from "./connection/conn.js";
import filmesRoute from "./routes/filmes.routes.js";


const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use("/filmes", filmesRoute);

Conn();
const PORT = 3000;

app.listen(PORT, () => {
    console.log('server is running');
});

