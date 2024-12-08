const mongoose = require('mongoose');

// Database Connection Function
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB
        // Uses environment variable MONGODB_URI if available, otherwise uses local MongoDB
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/backend-assessment', {
            useNewUrlParser: true,     // Use new URL parser
            useUnifiedTopology: true   // Use new Server Discover and Monitoring engine
        });
        
        // Log successful connection
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Log error and exit process if connection fails
        console.error(`Error: ${error.message}`);
        process.exit(1);  // Exit with failure code
    }
};

module.exports = connectDB;
