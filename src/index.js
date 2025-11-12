const createServer = require('./config/server');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const app = createServer();

// Connect to Database
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});