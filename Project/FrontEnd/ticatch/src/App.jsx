import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./component/footer/Footer.jsx";
import Header from "./component/header/Header.jsx";
import Login from "./signUp/login.jsx";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Login />
      <Footer></Footer>
    </div>
  );
};

export default App;
