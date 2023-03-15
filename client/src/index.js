import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/App.css";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Header/>
    <Home/>
    <Footer/>
    </div>
  </React.StrictMode>
);

