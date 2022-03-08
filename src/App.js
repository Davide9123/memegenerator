import React from 'react';
import Header from './components/header';
import Meme from './components/meme';
import Footer from './components/footer'


export default function App() {
  return (
    <div className="myCont">
      <Header />
      <Meme/>
      <Footer/>
    </div>
  )
};
