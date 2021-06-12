import React from 'react';
import ReactDOM from 'react-dom';
import './common.css'
import AboutMe from './components/aboutMe/aboutMe'
import Header from './components/static/header';
import Footer from './components/static/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);