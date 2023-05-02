import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./components/Banner/index";
import Footer from "./components/Footer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Banner />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
