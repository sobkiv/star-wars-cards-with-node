import appStyle from './App.module.css';
import Header from '../Header/Header';
import Sratships from '../Starships/Sratships';
import { useState } from 'react';
import People from '../People/People';
import Planets from '../Planets/Planets';

function App() {
  const [counter, setCounter] = useState(1);
  const [category, setCategory] = useState('people');

  const onButtonClick = () => {
    setCounter(counter + 1);
  };

  const clickOnMenu = (menu) => {
    setCategory(menu);
    setCounter(1);
  };

  return (
    <div className={appStyle.div}>
      <Header clickOnMenu={clickOnMenu} />
      <button onClick={onButtonClick}>NEXT</button>
      {category === 'people' ? (
        <People counter={counter} category={category} />
      ) : null}
      {category === 'planets' ? (
        <Planets counter={counter} category={category} />
      ) : null}
      {category === 'starships' ? (
        <Sratships counter={counter} category={category} />
      ) : null}
    </div>
  );
}

export default App;
