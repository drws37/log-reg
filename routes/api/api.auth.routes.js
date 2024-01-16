const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const configJWT = require('../../middleware/configJWT');
// Логика входа и регистрации

router.post('/sign-in', async (req, res) => {
  let user;
  try {
    const { name, password } = req.body;
    user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({
        message: 'Такой пользователь не существует или пароль неверный',
      });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      //если пароль не совпадает с паролем из базы
      res.json({
        message: 'Такой пользователь не существует или пароль неверный',
      });
      return;
    }
    res.json({ message: 'success' });
  } catch ({ message }) {
    console.log({ message });
  }
});

router.post('/sign-up', async (req, res) => {
  let user; // зачем это ???
  console.log(req.body);
  try {
    const { name, password, img } = req.body;
    // console.log(name, password, img);
    user = await User.findOne({ where: { name } });
    if (user) {
      res.json({ message: 'Такой пользователь уже есть.' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, password: hash, img });

    //Генерируем токены
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });

    //Устанавливаем куки
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });

    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    res.json({ message: 'success' });
  } catch ({ message }) {
    console.log({ message });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.redirect('/');
});

module.exports = router;
