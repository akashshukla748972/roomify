import http from "http";
import app from "./src/app.js";
import { Server } from "socket.io";
import { gv } from "./configs/global_variable.js";

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected: " + socket.id);
});

const PORT = gv.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
