import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/App.css";
import Banner from './components/Banner/index';
import LoginPage from './components/LoginPage/index';
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Banner />
      <LoginPage />
      <Footer />
    </div>
  </React.StrictMode>
);

