var express = require('express');
var fs      = require("fs");
var path    = require('path');
var app     = express();
app.get('/json-test', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var news = fs.readFileSync(path.resolve (__dirname,'news_mock.json'), "utf-8");
    res.send(news);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
