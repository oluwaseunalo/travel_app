import React from "react";
import { Routes, Route} from "react-router-dom";


import MainComponent from "./components/MainComponent/MainComponent";
import { RepoContextProvider } from "./store";
import LikedPopularRepo from "./components/LikedPopularRepo/LikedPopularRepo";

const App = () => {
   return (
      <>
         <RepoContextProvider>
            

            <Routes>
               <Route path="/" element={<MainComponent />} />
               <Route
                  path="/liked-repositories"
                  element={<LikedPopularRepo />}
               />
            </Routes>
   
         </RepoContextProvider>
      </>
   );
};

export default App;
