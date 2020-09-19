const express = require('express');

const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index.routes'));

app.listen(PORT)
console.log(`server on port: ${PORT}`)