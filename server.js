const express = require('express')
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const packageRoutes = require('./routes/packageRoutes')



connectDB(); //db connected
const app = express();

app.use(express.json()); //middleware
app.use(cors());

app.use('/packages',packageRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server started at port ${PORT}`);
})