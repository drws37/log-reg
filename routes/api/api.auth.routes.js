const router = require('express').Router();
const { User } = require('../../db/models');
// Логика входа и регистрации

router.post('/sign-in', async (req, res) => {
  try {
    const { name, password } = req.body;
    let user;
    user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({
        message: 'Такой пользователь не существует или пароль неверный',
      });
      return;
    }
    if (user.password !== password) {
      res.json({
        message: 'Такой пользователь не существует или пароль неверный',
      });
      return;
    }
    res.json({message:'success'})
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
    user = await User.create({ name, password, img });
    res.json({ message: 'success' });
  } catch ({ message }) {
    console.log({ message });
  }
});

module.exports = router;
