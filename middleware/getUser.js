const { User } = require('../db/models');
async function getUser(req, res, next) {
  if (res.locals.user) {
    const user = await User.findOne({
      where: { id: res.locals.user.id },
      attributes: ['name', 'img', 'id'],
    });
    res.locals.user.id = user;
  }

  next();
}

module.exports = getUser;
