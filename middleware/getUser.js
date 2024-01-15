const { User } = require('../db/models');
async function getUser(req, res, next) {
  const user = await User.finOne({
    where: { id: 1 },
    attributes: ['name', 'img', 'id'],
  });
}
