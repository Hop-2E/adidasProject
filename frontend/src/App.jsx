import "./App.css";
import axios from "axios";
import Home from "./pages/home";
import Header from "./components/header";
import Login from "./components/login";
import Profile from "./components/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const instance = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element = {<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
