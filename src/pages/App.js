import React, { useState } from "react";
import HomePage from "./HomePage/HomePage";
import ListPage from "./ListPage/ListPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import { Routes,Route } from "react-router-dom";

function App() {

  return (
      <>
      <div><h3>代辦清單</h3></div>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/list' element={<ListPage />} />
        </Routes>
    </>
  );
  
}

export default App;
