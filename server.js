var express = require('express');
var app = express();
const port = 4000;
app.use('/', express.static('dist'));
app.listen(process.env.PORT || port, function () {console.log(`Example app listening on port ${port}!`);});

