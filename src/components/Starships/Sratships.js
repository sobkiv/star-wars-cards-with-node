import React, { useState, useEffect } from "react";
import { FetchService } from "../../services/sw-service";
import sratshipsStyles from "./Starships.module.css"

function Sratships({ category, counter }) {
  const [starships, setStarships] = useState([]);

  const onFecth = async () => {
    let info = await FetchService.getComponent(category, counter);
    info.code ? setStarships(info.code) : setStarships(info.data);
  };

  useEffect(() => {
    onFecth();
  }, [category, counter]);

  return (
    <div className={sratshipsStyles.container}>
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${counter}.jpg`}
        alt={"starships-img"}
        className={sratshipsStyles.image}
        onError={(event)=>{
          event.target.setAttribute("src", `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`)
        }}
      />
      <h3>{`Name: ${starships.name}`}</h3>
      <ul>
        <li>{`Model: ${starships.model}`}</li>
        <li>{`Passengers: ${starships.passengers}`}</li>
        <li>{`Consumables: ${starships.consumables}`}</li>
      </ul>
    </div>
  );
}

export default Sratships;
