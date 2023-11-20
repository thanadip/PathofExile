import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//views
import Index from "./views/non-user/Index";
import NonPage from "./views/non-user/NonPage";
import Login from "./views/user/Login";
import Register from "./views/user/Register";
import EndGame from "./views/non-user/EndGame";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="*" element={<NonPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/end-game" element={<EndGame />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
