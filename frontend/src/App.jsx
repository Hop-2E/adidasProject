import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Man from "./pages/Man";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLogged from "./pages/HomeAdmin";
import Search from "./pages/Search";
import WishList from "./pages/WishList";
import Item from "./pages/Item";
import Sags from "./pages/Sags";
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
          <Route path="/Header" element={<Header />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/:id" element={<HomeLogged />} />
          <Route path="/:id/:search" element={<Search />} />
          <Route path="/:id/Wishlist" element={<WishList />} />
          <Route path="/:user_id/item/:id" element={<Item />} />
          <Route path="/:id/sags" element={<Sags />} />
          <Route path="/:userid/Man" element={<Man />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
