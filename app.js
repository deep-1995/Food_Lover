const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require("./config/keys");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
io.on("connection", (socket) => {
  console.log("conneted socket.io");
  socket.on("incoming Data", (data) => {
    console.log(data);
    io.emit("name", { name: data.name });
  });
  socket.on("disconnet", () => {
    console.log("client disconnected");
  });
});

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("conneted to mongo yeahh");
});
mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

http.listen(PORT, () => {
  console.log("server is running on", PORT);
});
