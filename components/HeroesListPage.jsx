const React = require('react');
const Layout = require('./Layout');
const HeroItem = require('./HeroItem');

function HeroesListPage({title, user, heroes}) {

  return(
    <Layout title={title} user={user}>
      <h1>Heroes Page</h1>
    <div className='container hero=container' style={{display: 'flex', justifyContent: 'space-around'}}>
      {
        heroes.map((hero) => 
          (<HeroItem hero={hero} key = {hero.id} user={user}/>)
        )
      }
    </div>
    </Layout>
  )
}

module.exports = HeroesListPage;