const React = require('react');

function HeroItem({ hero, user }) {
    return (
      <div key={hero.id} className="card" style={{ width: '18rem', margin: '20px'}}>
      <img src={hero.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <a href={`/heroes/${hero.id}`} className="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
    );

}

module.exports = HeroItem;
