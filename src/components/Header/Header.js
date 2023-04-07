import headerStyle from './Header.module.css';

function Header({ clickOnMenu }) {
  const menuData = ['people', 'planets', 'starships'];

  return (
    <header>
      <menu>
        <ul className={headerStyle.menu}>
          {menuData.map((menu, index) => {
            return (
              <li
                className={headerStyle.items}
                key={index}
                onClick={() => clickOnMenu(menu)}
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </menu>
    </header>
  );
}

export default Header;
