import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjrcts';


const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (btnCategory) => {
    setcurrentActive(btnCategory);
          const newArr = myProjects.filter((item) => { 
            const catFilter = item.category.find((cat) => {
              return cat === btnCategory
            });

            return catFilter === btnCategory});
          setArr(newArr);
  };

  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button onClick={() => {
          setcurrentActive("all");
          setArr(myProjects);
        }}
          className={currentActive === "all" ? "active" : null}>
          All Projects
        </button>
        <button onClick={() => {
          
            {/*const catFilter = item.category.filter((cat) => {
              return cat === "css"
            })
          return catFilter[0] === "css"}*/}

            handleClick("css");         
        }}
          className={currentActive === "css" ? "active" : null}

        >
          HTML & CSS
        </button>
        <button onClick={() => {
          handleClick("javaScript");
        }}
          className={currentActive === "javaScript" ? "active" : null}>
          JavaScript
        </button>
        <button onClick={() => {
          handleClick("react");
        }}
          className={currentActive === "react" ? "active" : null}>
          React & MUI
        </button>
        <button onClick={() => {
          handleClick("node");
        }}
          className={currentActive === "node" ? "active" : null}>
          Node & Express
        </button>
      </section>

      <section className='right-section flex'>

        {arr.map((item) => {
          return (
            <article key={item.imgPath} className='card'>
              <img width={266} src={item.imgPath} alt='' />
              <div style={{ width: 266 }} className="box">
                <h1 className='title'>{item.projectTitle}</h1>
                <p className='subtitle'>
                  {/* Add Project Description */}
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                  harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
                <div className="flex icons">
                  <div style={{ gap: 11 }} className='flex'>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href='#' className='link flex'>
                    Read more
                    <span style={{ alignSelf: 'end' }} className='icon-arrow-right'>
                    </span>
                  </a>
                </div>
              </div>
            </article>

          )
        })}

      </section>
    </main>
  );
};

export default Main;