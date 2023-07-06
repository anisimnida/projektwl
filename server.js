const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const cors = require('cors');


// Set up the Express app
const app = express();
const port = 3002;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://anisa:anisayahud@cluster0.ybpqfsr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());

app.use(cors())
// Routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})u;