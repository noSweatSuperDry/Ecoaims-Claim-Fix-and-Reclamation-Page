import React from "react";
import ReactDOM from "react-dom/client";

import Banner from "./components/Banner/index";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Banner />
      <LoginPage />
      <Footer />
    </div>
  </React.StrictMode>
);
