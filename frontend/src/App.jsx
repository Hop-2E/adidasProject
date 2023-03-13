import "./App.css";
import axios from "axios";
import Home from "./pages/home";
import Header from "./components/header";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import HomeLogged from "./pages/HomeAdmin";
import Search from "./pages/Search";
import WishList from "./pages/Wishlist";
import Item from "./pages/Item";
import Sags from "./pages/Sags";
import MensShoes from "./components/mensShoes";
import WomenShoes from "./components/WomenShoes";
import KidsShoes from "./components/KidsShoes";
export const instance = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
export const DarkMode = createContext();
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const styles = {
    body: {
      // backgroundColor: isDarkMode ? "white" : "grey",
    },
  };
  return (
    <DarkMode.Provider value={{ isDarkMode, setIsDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<HomeLogged />} />
          <Route path="/:id/:search" element={<Search />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/:user_id/item/:id" element={<Item />} />
          <Route path="/sags" element={<Sags />} />
          <Route path="/men" element={<MensShoes />} />
          <Route path="/women" element={<WomenShoes />} />
          <Route path="/kids" element={<KidsShoes />} />
        </Routes>
      </BrowserRouter>
    </DarkMode.Provider>
  );
}

export default App;
