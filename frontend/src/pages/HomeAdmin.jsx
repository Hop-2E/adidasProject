import { useState, useEffect } from "react";
import Body from "../components/Body";
import BodyAdmin from "../components/BodyAdmin";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderBlack from "../components/HeaderBlack";
const HomeLogged = () => {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = () => {
    if (JSON.parse(localStorage.getItem("role")) === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  console.log(admin);
  return (
    <div className="homeLogged">
      <HeaderBlack />
      <Header />
      {admin ? <BodyAdmin /> : <Body />}
      <Footer />
    </div>
  );
};
export default HomeLogged;
const styles = {
  homeLogged: {
    display: "flex",
    flexDirection: "column",
  },
};
