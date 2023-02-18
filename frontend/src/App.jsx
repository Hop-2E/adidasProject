import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import axios from "axios";
import Login from "./Router/Login";
import HomeLogged from "./Router/HomeLogged";
export const instance = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home/:userid" element={<HomeLogged />} />
      </Routes>
    </div>
  );
}

export default App;
