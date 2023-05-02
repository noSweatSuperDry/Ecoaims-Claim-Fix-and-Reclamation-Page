import React from "react";
import ReactDOM from "react-dom/client";

import Banner from "./components/Banner/index";
import Footer from "./components/Footer";
import Register from "./components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Banner />
      <Register />
      <Footer />
    </div>
  </React.StrictMode>
);
