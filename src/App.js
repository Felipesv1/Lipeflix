import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home.js";
import Movies from "./components/movies/Movies.js";
import Series from "./components/series/Series.js";
import Header from "./components/Header.js";
import GlobalStyled from './GlobalStyled';



export default function App(){
  return(
    <Router>
   <Header />
      <GlobalStyled/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
      </Router> 
  )
}