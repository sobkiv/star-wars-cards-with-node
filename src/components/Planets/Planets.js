import React, { useState, useEffect } from 'react';
import { FetchService } from '../../services/sw-service';
import planetsStyles from './Planets.module.css';

function Planets({ category, counter }) {
  const [planets, setPlanets] = useState([]);

  const onFecth = async () => {
    let info = await FetchService.getComponent(category, counter);
    info.code ? setPlanets(info.code) : setPlanets(info.data);
  };

  useEffect(() => {
    onFecth();
  }, [category, counter]);

  return (
    <div className={planetsStyles.container}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${counter}.jpg`}
        alt={'planet-img'}
        className={planetsStyles.image}
        onError={(event) => {
          event.target.setAttribute(
            'src',
            `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`
          );
        }}
      />
      <h3>{`Name: ${planets.name}`}</h3>
      <ul>
        <li>{`Diameter: ${planets.diameter}`}</li>
        <li>{`Surface water: ${planets['surface_water']}`}</li>
        <li>{`Terrain: ${planets.terrain}`}</li>
      </ul>
    </div>
  );
}

export default Planets;
