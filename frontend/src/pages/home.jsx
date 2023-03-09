import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import HeaderBlack from "../components/HeaderBlack";
import FooterBlack from "../components/FooterBlack";
function Home() {
  return (
    <div>
      <HeaderBlack />
      <Header />
      <Body />
      <FooterBlack />
    </div>
  );
}

export default Home;
