const path = require("path");
const express = require("express");
const cors = require("cors");
const multer = require('multer');

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client"));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"))
});

app.post("/images", upload.array("files"), (req, res) => {
    const base64Img = req.files.map(item => item.buffer.toString("base64"));
    res.status(200).json({ images: base64Img });
});

app.listen(80, () => console.log("Server is running"));