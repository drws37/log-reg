const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const heroesPage = require('./views/heroes.routes');
const authRouter = require('./views/auth.routes')
const apiAuthRouter = require('./api/api.auth.routes')

router.use('/', mainRouter);
router.use('/heroes', heroesPage);
router.use('/auth', authRouter);

router.use('/api/auth', apiAuthRouter);

module.exports = router;
