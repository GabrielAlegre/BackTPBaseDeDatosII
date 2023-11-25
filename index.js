/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticket');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://gabrielalegre68:tpTicketera2023@tpticketera.4pcj7m3.mongodb.net/Ticketera', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB se conecto!'))
  .catch(err => console.log('No se pudo conectar', err));

// Usar rutas
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server en puerto ${PORT}`);
});*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticket');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI || environment.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB se conecto!'))
  .catch(err => console.log('No se pudo conectar', err));

// Usar rutas
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server en puerto ${PORT}`);
});