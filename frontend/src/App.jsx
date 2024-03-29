import "./App.css";
import Pants from "./components/Pants";
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
import "./App.css"
import Shirts from "./components/Shirts";
import Sneaker from "./components/Sneakers";
import Shorts from "./components/Shorts";
import Soccer from "./components/Soccers";

export const instance = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
export const Opacity = createContext();
function App() {
  const [isOpacity, setIsOpacity] = useState(true);

  return (
    <Opacity.Provider value={{ isOpacity, setIsOpacity }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<HomeLogged />} />
          <Route path="/:id/:search" element={<Search />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/:user_id/item/:id" element={<Item />} />
          <Route path="/:id/sags" element={<Sags />} />
          <Route path="/men" element={<MensShoes />} />
          <Route path="/women" element={<WomenShoes />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/sneakers" element={<Sneaker />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/soccers" element={<Soccer />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/kids" element={<KidsShoes />} />
        </Routes>
      </BrowserRouter>
    </Opacity.Provider>
  );
}

export default App;
