const router = require('express').Router();

const HeroesListPage = require('../../components/HeroesListPage');

const { Hero } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const heroes = await Hero.findAll();
    const html = res.renderComponent(HeroesListPage, {
      title: 'Heroes Page',
      heroes,
    });
    res.send(html);
  } catch ({ message }) {
    console.log({ message });
  }
});

module.exports = router;
