require('@babel/register');
const express = require('express');
const app = express();
const path = require('path');
// const cookieParser = require('cookie-parser')

const indexRouter = require('./routes/index.routes');

const ssr = require('./middleware/ssr');

app.use(ssr);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // позволяет читать пирходящие с клиента джейсоны

app.use('/', indexRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Сервер РАБотает на ${PORT} порту`);
});
