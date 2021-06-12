import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './components/aboutMe'
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