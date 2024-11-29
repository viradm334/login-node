const express = require('express');
const connectDB = require('./db'); 
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

connectDB();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use(authRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
