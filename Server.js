'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

var http = require('http'),
    fs = require('fs');


fs.readFile('./Q2_HTML5.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});
console.log(`Running on http://${HOST}:${PORT}`);