const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


