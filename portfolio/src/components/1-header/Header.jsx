import {useState, useEffect} from 'react';
import './header.css';
const Header = () => {
  const [showModel, setshowModel] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
   if(theme === "light"){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
   }else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");
   }
  }, [theme]);
  
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
      <button onClick={() => {
        // send value to local storage
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
        // get value from local storage
        settheme(localStorage.getItem("currentMode"));

        }} className='mode flex '>
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
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
