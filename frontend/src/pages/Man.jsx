import Collection from "../components/Collection";
import React from "react";
import Header from "../components/Header";
import ItemNavbar from "../components/ItemNavbar";
import LearnMore from "../components/LearnMore";
import FooterNavbar from "../components/footerNavbar";
import FooterBlack from "../components/FooterBlack";

function Man() {
  const manStyle = {
    headerImage: {
      width: "100vw",
      height: "91vh",
      border: "1px solid black",
    },
  };
  return (
    <div>
      <Header />
      <div style={manStyle.headerImage}></div>
      <ItemNavbar />
      <Collection />
      <LearnMore />
      <FooterNavbar />
      <FooterBlack />
    </div>
  );
}

export default Man;
