import FooterNavbar from "./footer-components/footerNavbar";
import React from "react";
import FooterBlack from "./footer-components/FooterBlack";
import FooterADS from "./footer-components/FooterADS";
const Footer = () => {
  return (
    <div>
      <FooterADS />
      <FooterNavbar />
      <FooterBlack />
    </div>
  );
};

export default Footer;
