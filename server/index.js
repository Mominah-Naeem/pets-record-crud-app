// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const petRoutes = require('./routes/pets');

// const app = express();
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

// app.use(express.json());
// app.use('/pets', petRoutes);

// mongoose.connect(MONGO_URI).then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   });
  


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
require('dotenv').config();
const petRoutes = require('./routes/pets');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Enable CORS for all routes
app.use(cors()); // This will allow all domains to make requests


const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
 };
app.use(cors(corsOptions)); // Use custom options for CORS

app.use(express.json());
app.use('/pets', petRoutes);

mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
