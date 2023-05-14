import './Footer.css';

const Footer = () => {
  return <footer className='footer'>
    <div className='container'>
      <h1 className='logo'>Туры онлайн</h1>
      <nav className='nav'>
        <ul>
          <li><img className='social' src={require('./../../assets/instagramActive.png')} alt=""/></li>
          <li><img className='social' src={require('./../../assets/telegramActive.png')} alt=""/></li>
          <li><img className='social' src={require('./../../assets/whatsappActive.png')} alt=""/></li>
        </ul>
      </nav>
    </div>
  </footer>;
};

export default Footer;
