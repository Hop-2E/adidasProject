import { useState, useEffect } from "react";
import Body from "../components/body";
import BodyAdmin from "../components/bodyAdmin";
import Header from "../components/header";
import FooterADS from "../components/FooterADS";
import FooterBlack from "../components/FooterBlack";
import FooterNavbar from "../components/FooterNavbar";
import FooterText from "../components/FooterText";
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
  return (
    <div className="homeLogged">
      <Header />
      {admin ? <BodyAdmin /> : <Body />}
      <FooterText />
      <FooterADS />
      <FooterNavbar />
      <FooterBlack />
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
