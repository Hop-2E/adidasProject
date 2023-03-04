import { useState, useEffect } from "react";
import Body from "../components/body";
import BodyAdmin from "../components/bodyAdmin";
import Header from "../components/header";
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
      <Header />
      {admin ? <BodyAdmin /> : <Body />}
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
