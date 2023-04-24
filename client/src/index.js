import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/App.css";
import Banner from './components/Banner/index';
import Home from './components/Home/index';
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Banner/>
    <Home/>
    <Footer/>
    </div>
  </React.StrictMode>
);

