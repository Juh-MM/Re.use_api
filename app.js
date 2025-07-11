const express = require('express');
require('dotenv').config(); // <-- ADICIONE ESTA LINHA AQUI
const connectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/produtos', productRoutes);
app.use('/api/carrinho', cartRoutes);

module.exports = app;
