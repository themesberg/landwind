const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const ext = path.extname(req.url);
  if (ext === '.css') {
    res.type('text/css');
  } else if (ext === '.js') {
    res.type('text/javascript');
  }
  next();
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('ejs/index');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
