
require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Successfully running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();



















//   ==============================     NOTE    ============================================

// 1. index.js

// Purpose: Backend ka entry point

// Server start karta hai.
// Database connection establish karta hai.
// app.js ko import karta hai.
// Port listen karwata hai.




// 2. app.js

// Purpose: Express application configuration

// Yahan middleware aur configurations hoti hain:

// express.json()
// express.urlencoded()
// cookie-parser
// cors
// Routes register karna



// 3. constants.js

// Purpose: Reusable constants store karna

// Aise values jo project me multiple jagah use hongi.



// 1. DB (Database)

// Purpose: Connect and interact with the database.

// Responsibilities:

// Connect to MongoDB/MySQL/PostgreSQL
// Handle database connection logic
// Export database connection

// Example:

// // db/index.js
// mongoose.connect(process.env.MONGODB_URI);


// 2. Models

// Purpose: Define the structure of data stored in the database.

// Responsibilities:

// Create schemas
// Define collections/tables
// Add validations

// Example:

// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String
// });

// Think of a Model as a blueprint for data.

// 3. Controllers

// Purpose: Handle business logic.

// Responsibilities:

// Receive request from routes
// Process data
// Query database using models
// Send response

// Example:

// const registerUser = async (req, res) => {
//     const user = await User.create(req.body);

//     res.status(201).json(user);
// };

// Think of Controllers as the brain of the application.

// 4. Routes

// Purpose: Define API endpoints.

// Responsibilities:

// Map URL to controller functions

// Example:

// router.post("/register", registerUser);
// router.get("/users", getUsers);

// Think of Routes as the traffic manager.

// 5. Middlewares

// Purpose: Execute code before the request reaches the controller.

// Responsibilities:

// Authentication
// Authorization
// Logging
// Validation
// Error handling

// Example:

// app.use(express.json());
// app.use(authMiddleware);

// Think of Middleware as a security guard/checkpoint.

// 6. Utils (Utilities)

// Purpose: Store reusable helper functions.

// Responsibilities:

// JWT generation
// Email sending
// File uploading
// Custom error classes

// Example:

// const generateToken = (userId) => {
//     return jwt.sign({ userId }, SECRET);
// };

// Think of Utils as a toolbox.

// 7. More (Depends on Project)

// Additional folders may include:

// Services

// Contains business logic that can be reused across controllers.

// services/
//    user.service.js
// Config

// Stores configuration settings.

// config/
//    database.js
//    cloudinary.js
// Validators

// Request validation logic.

// validators/
//    user.validator.js
// Constants

// Reusable constants.

// export const DB_NAME = "youtube";
// Helpers

// Small utility/helper functions.

// helpers/
//    formatDate.js
// Complete Request Flow
// Client
//    ↓
// Route
//    ↓
// Middleware
//    ↓
// Controller
//    ↓
// Model
//    ↓
// Database
//    ↓
// Controller
//    ↓
// Response
//    ↓
// Client
// Easy Memory Trick
// Folder	Role
// DB	Connect database
// Models	Data structure
// Controllers	Business logic
// Routes	API endpoints
// Middlewares	Request checking
// Utils	Helper functions
// Services	Reusable business logic

// A simple sentence to remember:

// Routes receive requests, Middlewares check them, Controllers process them, Models talk to the Database, and Utils help everyone. 🚀
