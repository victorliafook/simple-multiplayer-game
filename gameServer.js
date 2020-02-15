import { dirname } from "path";
import { fileURLToPath } from 'url';
import express from "express";
import http from "http";
import io from "socket.io";

const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();
var server = http.createServer(app);
var socket = io(server);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

socket.on('connection', function(connection){
  console.log('a user connected');
});

server.listen(8080, function(){
  console.log('listening on *:8080');
});