import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default App;
