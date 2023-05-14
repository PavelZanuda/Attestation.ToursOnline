import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <h1 className='logo'>Туры онлайн</h1>
        <nav className='nav'>
          <ul>
            <li>Корзина</li>
            <li>Избранное</li>
            <li>О нас</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
