const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 6969;
var cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/AMS?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('MongoDB connected!');
});

// Register routes
const authRoutes = require('./routes/auth');
const registerRoutes = require('./routes/register');
app.use('/api/auth', authRoutes);
app.use('/api/register', registerRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
