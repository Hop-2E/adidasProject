import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Men from "./components/men";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/Men" element={<Men/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
