
import React, { Component }  from 'react';
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";




import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">



    <BrowserRouter>
 
      <Routes>
          <Route index element={ <Home />} />
      </Routes>
    </BrowserRouter>   

    </div>
  );
}

export default App;
