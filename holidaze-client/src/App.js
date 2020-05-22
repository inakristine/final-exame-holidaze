import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Searchfield from './pages/Searchfield';
import Footer from './components/footer';
import './scss/styles.scss';

export default function App(props) {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Searchfield className='searchfield' />
    {props.children}
    <Footer />
    </div>
  );
}
