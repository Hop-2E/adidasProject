import { useState, useEffect } from "react";
import Body from "../components/body";
import Header from "../components/header";
const HomeLogged = () => {
  const [userid, setUserId] = useState();
  const [role, setRole] = useState();
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
      {admin ? "dasf" : <Body />}
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
