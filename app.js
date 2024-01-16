require('@babel/register');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');


const indexRouter = require('./routes/index.routes');

const ssr = require('./middleware/ssr');
const { verifyAccessToken } = require('./middleware/verifyJWT');  
const getUser = require('./middleware/getUser');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // ???
app.use(express.json()); // позволяет читать приходящие с клиента джейсоны
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
app.use(verifyAccessToken)
app.use(getUser)

app.use('/', indexRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Сервер РАБотает на ${PORT} порту`);
});
