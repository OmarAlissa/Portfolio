import { useEffect, useState } from 'react'
import './index.css'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'

export function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true)
      } else {
        setshowScrollBtn(false)
      }
    })
  }, [])
  const [showScrollBtn, setshowScrollBtn] = useState(false)
  return (
    <div id='up' className='container'>
      {/* Split the oage in sections to make it easier to read. and to work with*/}
      <Header />
      <Hero />
      <div className='divider'  />
      <Main />
      <div className='divider'  />
      <Contact />
      <div className='divider'  />
      <Footer />
 
      <a style={{opacity: showScrollBtn ? 1 : 0, transition:"0.5s"}} href='#up'>
        <button className='icon-keyboard_arrow_up scroll2Top'></button>
      </a>

      
      

    </div>

  )
}
export default App
