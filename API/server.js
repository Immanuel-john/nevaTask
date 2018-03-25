'use strict';

const Hapi = require('hapi');
// Create a server with a host and port
const server = new Hapi.Server();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',
    database: 'neva'
});
connection.connect();
server.connection({
    host: '127.0.0.1',
    port: 8000,
    routes: {
        cors: true
    }
});

server.route({
    method: 'POST',
    path: '/add',
    handler: function(request, reply) {
        var payload = request.payload
        console.log(payload.price);
        connection.query("INSERT INTO users(email,password) VALUES('" + payload.email + "','" + payload.password + "')", function(error, results, fields) {
            if (error) throw error;
            emit("refresh")
        });

        return reply(payload);
    }
});
server.route({
    method: 'POST',
    path: '/add/addhi',
    handler: function(request, reply) {
        var payload = request.payload
    
        console.log(payload.price);
        connection.query("INSERT INTO hi(username,datetime) VALUES('" + payload.username + "',Now())", function(error, results, fields) {
            if (error) throw error;
            emit("refresh")
        });

        return reply(payload);
    }
});

server.route({
    method: 'GET',
    path: '/load',
    handler: function(request, reply) {
        connection.query("SELECT * FROM hi ", function(error, results, fields) {
            if (error) throw error;
            return reply(JSON.stringify(results));
        });

    }
});
server.route({
    method: 'GET',
    path: '/load1',
    handler: function(request, reply) {
        connection.query("SELECT * FROM users ", function(error, results, fields) {
            if (error) throw error;
            return reply(JSON.stringify(results));
        });

    }
});


var io = require("socket.io")(server.listener);

io.on("connection", function(socket) {
    // emit();
    console.log('connected');
})

function emit(name) {
    io.sockets.emit('address', { hello: name });
}

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});