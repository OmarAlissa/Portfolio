import {useState} from 'react';
import './header.css';
const Header = () => {
  const [showModel, setshowModel] = useState(false);
  return (
    <header className='flex'>
      <button onClick={() => setshowModel(true)} className='mode menu icon-menu flex'></button>
      <div />
      <nav>
        <ul className='flex'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Articles</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Speaking</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>

      </nav>
      <button className='mode flex '>
        <span className='icon-moon-o menu'></span>
      </button>

      {showModel && (
        
      <div className="fixed">
      {/* ul>(li>a)*5    to create elements easier*/}
      <ul className="model">
        <li>
          <button className="icon-clear" onClick={() => setshowModel(false)} />
        </li>
        <li><a href="">About</a></li>
        <li><a href="">Aricles</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
      </ul>
    </div>
      )}
    </header>
  );
};

export default Header;
