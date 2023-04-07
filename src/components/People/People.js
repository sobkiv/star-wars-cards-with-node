import React, { useEffect, useState } from 'react';
import { FetchService } from "../../services/sw-service";
import peopleStyles from "./People.module.css"

function People({ category, counter}) {
  const [people, setPeople] = useState({
    name: 'Luke Skywalker',
    gender: 'male',
    birth_year: '19BBY',
    eye_color: 'blue'
  });

  const onFecth = async () => {
    let info = await FetchService.getComponent(category, counter);
    info.code ? setPeople(info.code) : setPeople(info.data);
  }

  useEffect(() => {
    onFecth();
  }, [category, counter]);

  return (
    <div className={peopleStyles.container}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`}
        alt={"people-img"}
        className={peopleStyles.image}
      />
      <h3>{`Name: ${people.name}`}</h3>
      <ul>
        <li>{`Gender: ${people.gender}`}</li>
        <li>{`Birth Year: ${people.birth_year}`}</li>
        <li>{`Eye color: ${people.eye_color}`}</li>
      </ul>
    </div>
  )
}

export default People;
