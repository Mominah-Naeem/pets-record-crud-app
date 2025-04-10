const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config();
const petRoutes = require('./routes/pets');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


app.use(cors());


const corsOptions = {
  origin: 'http://localhost:5173', 
 };
app.use(cors(corsOptions));

app.use(express.json());
app.use('/pets', petRoutes);

mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
