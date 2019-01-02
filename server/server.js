const path = require('path');
const express = require('express');
const app = new express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect',()=>{
        console.log('Disconnected from client');
    });
});

if (!module.parent) {
    server.listen(port, () => {
        console.log(`listening at port ${port}`);
    });
};