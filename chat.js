const { Server } = require('socket.io');
const auth = require("./middleware/auth");
let Message = "";

function init(httpServer, models) {
    // ici : on branche Socket.IO sur l'application express
    // pour écoute conjointe HTTP / WebSocket
    const io = new Server(httpServer);
    // io.use(require("./middleware/auth")(models));

    //-- Connexion du Socket.io
    io.on("connection", (socket) => {
        // console.log(`New client connected id: ${socket.id}`);
        // io.emit("message", `New client connected id: ${socket.id}`);

        // on connectRoom join le client dans la room
        socket.on("connectRoom", (room) => {
            socket.join(room);
            console.log("Client connected to room " + room);
        });

        socket.on("message", (body) => {
            console.log("Message received: " + body.message);
            io.emit("messageToRoom", body);
        });

        // ON getMessages check the messages in the room
      



        socket.on("disconnect", () => {
            console.log(`Client disconnected id: ${socket.id}`);
        });

    });

    return io;
}

module.exports = { init };