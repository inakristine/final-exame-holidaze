import React from 'react';
import Header from './components/header';
import Nav from './pages/Navigation';
import Footer from './components/footer';
import './scss/styles.scss';

const init = () => {
  localStorage.setItem('password', 'humlesnurr');
  localStorage.setItem('username', 'administrator');
}
window.onload = init();

export default function App(props) {
  return (
    <div className='App'>
    <Header />
    <Nav />
    {props.children}
    <Footer />
    </div>
  );
}
