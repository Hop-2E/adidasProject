const BodySearch = ({ item }) => {
  const navbarStyle = {
    navbarMain: {
      margin: "20px",
      width: "278px",
      height: "370px",
      borderRadius: "10px",
      zIndex: "0",
    },
    navbarContainer: {
      display: "flex",
    },
    navbarHelper: {
      position: "relative",
      textAlign: "center",
    },
    navbarHelper2: {
      padding: "0px 10px 20px",
      marginTop: "10px",
      zIndex: "999",
      width: "100px",
    },
    navbarPrice: {
      position: "absolute",
      marginTop: "-50px",
      marginLeft: "5px",
      backgroundColor: "white",
      borderRadius: "5px",
    },
    navbarName: {
      color: "000000",
      fontSize: "20px",
    },
    navbarTitle: {
      color: "000000",
    },
    navbarType: {
      color: "#767677",
    },
    navbarWishList: {
      alignItems: "end",
    },
  };

  return (
    <div className="navbarMain" style={navbarStyle.navbarMain}>
      <div style={navbarStyle.navbarHelper} className="navbarHelper">
        <img src={item.img} alt="" className="imageOfItem" />

        <div style={navbarStyle.navbarPrice}>{item.price}$</div>
      </div>
      <div style={navbarStyle.navbarContainer}>
        <div style={navbarStyle.navbarHelper2}>
          <div style={navbarStyle.navbarName}>{item.name}</div>
          <div style={navbarStyle.navbarType}>{item.type}</div>
        </div>
      </div>
    </div>
  );
};
export default BodySearch;
