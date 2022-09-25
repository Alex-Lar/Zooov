const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const app = express();
const PORT = 3000;

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Port ${PORT} is listening...`)
})