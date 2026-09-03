import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUP from "./Components/SignUp";
import SignIn from "./Components/SignIn";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <h1 className="heading">
          Welcome to the Student_Employee Management System
        </h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default App;