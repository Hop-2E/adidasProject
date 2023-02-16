import './App.css';
import Header from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/header' element = {<Header/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
