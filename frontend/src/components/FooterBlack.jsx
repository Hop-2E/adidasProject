import React from "react";

function FooterBlack() {
  return (
    <div className="blackFooter">
      <div className="blackColumn">© 2023 adidas America, Inc.</div>
      <div style={{ borderLeft: "1px solid gray" }} className="blackColumn">
        Data settings
      </div>
      <div style={{ borderLeft: "1px solid gray" }} className="blackColumn">
        Do not sell my personal information
      </div>
      <div style={{ borderLeft: "1px solid gray" }} className="blackColumn">
        Privacy Policy
      </div>
      <div style={{ borderLeft: "1px solid gray" }} className="blackColumn">
        Terms and Conditions
      </div>
    </div>
  );
}

export default FooterBlack;
