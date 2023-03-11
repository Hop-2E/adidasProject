import { useState, useEffect } from "react";
import Body from "../Components/body";
import BodyAdmin from "../Components/bodyAdmin";
import Header from "../Components/header";
import FooterADS from "../Components/FooterADS";
import FooterBlack from "../Components/FooterBlack";
import FooterNavbar from "../Components/FooterNavbar";
import FooterText from "../Components/FooterText";
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
