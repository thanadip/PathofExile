import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//views
import Index from "./views/non-user/Index";
import NonPage from "./views/non-user/NonPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="*" element={<NonPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
