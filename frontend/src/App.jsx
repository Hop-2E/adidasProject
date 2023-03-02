import "./App.css";
import axios from "axios";
import Header from "./components/header";
import Home from "./pages/home";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
