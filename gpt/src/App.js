import React from 'react'
import { Blog,Features,Footer,Header,Possibilty,Whatgpt } from './container'
import { Cta,Brand,Navbar } from './component'
import './App.css';
const App = () => {

  return (
    <>
      <div className='App'>
      <div className='gradient_bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <Whatgpt/>
      <Features/>
      <Possibilty/>
      <Cta/>
      <Blog/>
      <Footer/>
      

      </div>
    </>
  )
}

export default App