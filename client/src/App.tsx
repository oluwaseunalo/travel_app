import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainComponent from "./components/MainComponent/MainComponent";
import { RepoContextProvider } from "./store";
import LikedPopularRepo from "./components/LikedPopularRepo/LikedPopularRepo";

const App = () => {
   return (
      <>
         <RepoContextProvider>
            {/* <Header /> */}

            <Routes>
               <Route path="/" element={<MainComponent />} />
               <Route
                  path="/liked-repositories"
                  element={<LikedPopularRepo />}
               />
            </Routes>
            {/* <Footer /> */}
         </RepoContextProvider>
      </>
   );
};

export default App;
