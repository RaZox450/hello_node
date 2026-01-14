import { fileURLToPath } from 'url';
import { dirname } from "path";
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/indexProduit.html", (req, res) => {
    res.sendFile(__dirname + "/indexProduit.html")
})

app.get("/indexContact.html", (req, res) => {
    res.sendFile(__dirname + "/indexContact.html")
})

app.get("/static/css/:fileName", (req, res) => {
    res.sendFile(__dirname + "/static/css/" + req.params.fileName + ".css")
})

app.get("/static/js/:fileName", (req, res) => {
    res.sendFile(__dirname + "/static/js/" + req.params.fileName + ".js")
})

app.get("/img/:fileName", (req, res) => {
    res.sendFile(__dirname + "/img/" + req.params.fileName)
})

app.listen(80, () => {
    console.log("server is running on 127.0.0.1:80")
})

// () => {}