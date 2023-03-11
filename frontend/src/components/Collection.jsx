import React from "react";

function Collection() {
  const Collection = {
    Main: {
      display: "flex",
      width: "100vw",
      height: "55vh",
      justifyContent: "center",
    },
    Container: {
      display: "flex",
      height: "55vh",
      width: "19vw",
      marginLeft: "10px",
      flexDirection: "column",
      borderRadius: "10px",
    },
    Title: {
      fontWeight: "bolder",
      fontSize: "15px",
      marginTop: "9px",
    },
    Desp: {
      marginTop: "8px",
    },
  };
  return (
    <div style={Collection.Main}>
      <div style={Collection.Container} className="collectionMain">
        <img
          style={{ width: "19vw", height: "45vh", borderRadius: "10px" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/OG102_SS23-March-men-tcc-2_tcm221-998856.jpg"
          alt=""
        />
        <div style={Collection.Title}>FORUM</div>
        <div style={Collection.Desp}>
          Built to maintain its original hard inspiration.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "40px",
            fontSize: "15px",
          }}
        >
          SHOP NOW
        </div>
      </div>
      <div style={Collection.Container} className="collectionMain">
        {" "}
        <img
          style={{ width: "19vw", height: "45vh" }}
          src=" https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/sp098_ss23_boston-marathon-apparel-tcc-m-v2_tcm221-998866.jpg"
          alt=""
        />
        <div style={Collection.Title}>2023 BOSTON MARATHON® APPAREL</div>
        <div style={Collection.Desp}>
          Our most sustainable collection yet for the iconic race.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "25px",
            fontSize: "15px",
          }}
        >
          SHOP NOW
        </div>
      </div>
      <div style={Collection.Container} className="collectionMain">
        {" "}
        <img
          style={{ width: "19vw", height: "45vh" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/image-2023-02-22-10-00-12-130_tcm221-998860.png"
          alt=""
        />
        <div style={Collection.Title}>NEW ARRIVALS</div>
        <div style={Collection.Desp}>
          Jumpstart springtime running with the adidas 4DFWD 2 and more.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "25px",
            fontSize: "15px",
          }}
        >
          SHOP NOW
        </div>
      </div>
      <div style={Collection.Container} className="collectionMain">
        {" "}
        <img
          style={{ width: "19vw", height: "45vh" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/ss23-spring-shop-teaser-carousel-m-v2_tcm221-998868.jpg"
          alt=""
        />
        <div style={Collection.Title}>SPRING FORWARD</div>
        <div style={Collection.Desp}>
          Strut into spring with your own style.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "40px",
            fontSize: "15px",
          }}
        >
          SHOP NOW
        </div>
      </div>
    </div>
  );
}

export default Collection;
