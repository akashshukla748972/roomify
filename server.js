import http from "http";
import app from "./src/app.js";
import { Server } from "socket.io";
import { gv } from "./configs/global_variable.js";
import { connectDB } from "./configs/db.js";

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected: " + socket.id);
});

const PORT = gv.PORT || 3000;

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("database connection error:", error);
    process.exit(1);
  });
