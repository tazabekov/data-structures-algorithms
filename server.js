const express = require('express');
const app = express();

app.use(express.static('.'));

app.listen(4000, function () {
    console.log('Started server at localhost:4000!')
});
