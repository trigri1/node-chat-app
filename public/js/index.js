var socket = io();
socket.on('connect', function () {
    console.log('connected to server');
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);

    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Kareem',
//     text: 'acknowledgments'
// }, function (data) {
//     console.log('Got the acknowledgment', data);
// });

$('#message-form').on('submit', (event) => {
    event.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, (acknowledgment) => {
        console.log('Got the jquery acknowledgment');
    });
});