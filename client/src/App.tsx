import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainComponent from "./components/MainComponent/MainComponent";

const App = () => {
   return (
      <>
         <Header />
         <MainComponent />

         <Footer />
      </>
   );
};

export default App;
