import React from "react";

function ItemNavbar() {
  const Navbar = {
    Main: {
      display: "flex",
      width: "100vw",
      height: "30vh",
      justifyContent: "center",
    },
    Container: {
      backgroundColor: "#EBEFF1",

      display: "flex",
      justifyContent: "center",
      marginLeft: "10px",
      height: "22vh",
      width: "19vw",
      flexDirection: "column",
    },
    Title: {
      display: "flex",
      justifyContent: "center",
      textDecoration: "underline",
      fontWeight: "bolder",
      fontSize: "13px",
      marginTop: "9px",
    },
    Image: {
      width: "10vw",
      height: "18vh",
      marginLeft: "90px",
    },
  };
  return (
    <div style={Navbar.Main}>
      <div style={Navbar.Container}>
        <img
          style={Navbar.Image}
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b550b9bb10db421aa187af69013086b8_9366/ultraboost-light-shoes.jpg"
          alt=""
        />
        <div style={Navbar.Title}>SNEAKERS</div>
      </div>
      <div style={Navbar.Container}>
        <img
          style={Navbar.Image}
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b238cfb06a4a40ccb042ac5c0000d2da_9366/performance-primegreen-polo-shirt.jpg"
          alt=""
        />
        <div style={Navbar.Title}>TOPS</div>
      </div>
      <div style={Navbar.Container}>
        <img
          style={Navbar.Image}
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/17b0c02e79b344229a6cae7601479312_9366/team-issue-tapered-pants.jpg"
          alt=""
        />
        <div style={Navbar.Title}>PANTS</div>
      </div>
      <div style={Navbar.Container}>
        <img
          style={Navbar.Image}
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e66141b2275843db9515acf70120e805_9366/essentials-fleece-3-stripes-full-zip-hoodie.jpg"
          alt=""
        />
        <div style={Navbar.Title}>HOODIE</div>
      </div>
    </div>
  );
}

export default ItemNavbar;
