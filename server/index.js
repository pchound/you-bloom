require('dontex').config();
const express = require('express');
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json())
app.use(cors());

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))