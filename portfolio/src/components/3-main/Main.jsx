import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjrcts';
import { AnimatePresence, motion } from "framer-motion";


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
          handleClick("java");
        }}
          className={currentActive === "java" ? "active" : null}>
          Java
        </button>
        <button onClick={() => {
          handleClick("react");
        }}
          className={currentActive === "react" ? "active" : null}>
          React
        </button>
        <button onClick={() => {
          handleClick("python");
        }}
          className={currentActive === "python" ? "active" : null}>
          Python
        </button>
      </section>

      <section className='right-section flex'>

      <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                  {item.des}
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    {/*<a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
            </a>*/}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>

      </section>
    </main>
  );
};

export default Main;