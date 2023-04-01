const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 6969;
var cors = require('cors')

app.use(cors())

// var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
const upload=require('./routes/card')
const cart = require('./routes/cart')
const service = require('./routes/service')
const custinf=require('./routes/custdel')
app.use('/api/auth', authRoutes);
app.use('/api/register', registerRoutes);
app.use('/api', upload);
app.use('/api',cart);
app.use('/api',service);
app.use('/api',custinf);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
