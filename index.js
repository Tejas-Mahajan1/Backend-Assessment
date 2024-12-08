const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const routes = require("./routes/indexRoutes");
const http = require("http");
const { Server } = require("socket.io");
const usersRoute = require("./routes/usersRoute");
const earningsRoutes = require("./routes/earningsRoutes");

// Initialize MongoDB connection
connectDB();

// Create Express app and HTTP server for Socket.io
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware Configuration

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Route Configurations and Mount the main routes
app.use("/", routes);

// Mount API routes with /api prefix
app.use("/api", usersRoute);
app.use("/api", earningsRoutes);

// WebSocket Configuration
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle real-time transaction events
  socket.on("new-transaction", async ({ userId, transactionAmount }) => {
    // Calculate and distribute earnings based on MLM structure
    await calculateAndDistributeEarnings(userId, transactionAmount);

    // Emit updated earnings to all connected clients
    const earnings = await Earnings.find({ user: userId });
    io.emit("earnings-update", earnings);
  });
});

// Server Configuration
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
