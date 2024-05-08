import React from 'react';
import './main.css';
const Main = () => {
  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button className='active'>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>

      <section className='right-section flex'>

        {["a", "b", "c"].map((item) => {
          return (
            <article key={item} className='card'>
              <img width={266} src='./1.jpg' alt='' />
              <div style={{ width: 266 }} className="box">
                <h1 className='title'>Title</h1>
                <p className='subtitle'>
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