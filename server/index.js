const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 10000;
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


