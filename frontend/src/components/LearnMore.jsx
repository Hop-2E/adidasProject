import React from "react";

function LearnMore() {
  const Collection = {
    Main: {
      display: "flex",
      width: "100vw",
      height: "65vh",
      justifyContent: "center",
    },
    Container: {
      display: "flex",
      height: "65vh",

      width: "19vw",
      marginLeft: "10px",
      flexDirection: "column",
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
      <div style={Collection.Container}>
        <img
          style={{ width: "19vw", height: "45vh" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/ED029_The-Only-Ultraboost-Sizing-Guide_Teaser-Carousel_tcm221-922038.jpg"
          alt=""
        />
        <div style={Collection.Title}>ULTRABOOST SIZE GUIDE</div>
        <div style={Collection.Desp}>
          Upgrade your runs with the adidas Ultraboost. Read our size guide to
          discover the differences between each Ultraboost version to find the
          perfect shoe for you.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "20px",
            fontSize: "15px",
          }}
        >
          LEARN MORE
        </div>
      </div>
      <div style={Collection.Container}>
        {" "}
        <img
          style={{ width: "19vw", height: "45vh" }}
          src=" https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/SEO_Forum-Size-Guide_Mastead_Teaser-v2-Carousel_tcm221-922058.jpg"
          alt=""
        />
        <div style={Collection.Title}>FORUM SIZE GUIDE</div>
        <div style={Collection.Desp}>
          Curious about where to start with adidas Forum sizing? Look no further
          to learn about how the iconic sneakers fit before even trying them on.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "45px",
            fontSize: "15px",
          }}
        >
          LEARN MORE
        </div>
      </div>
      <div style={Collection.Container}>
        {" "}
        <img
          style={{ width: "19vw", height: "45vh" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/FW22_What-Shoes-to-Wear-to-Gym_HP_tcm221-947951.jpg"
          alt=""
        />
        <div style={Collection.Title}>BEST SHOES FOR THE GYM</div>
        <div style={Collection.Desp}>
          Find out what shoes are actually best for your gym workouts with
          adidas’ top picks.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "65px",
            fontSize: "15px",
          }}
        >
          LEARN MORE
        </div>
      </div>
      <div style={Collection.Container}>
        {" "}
        <img
          style={{ width: "19vw", height: "45vh" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/FW22_How-to-Choose-Running-Shoes_HP_tcm221-947954.jpg"
          alt=""
        />
        <div style={Collection.Title}>HOW TO CHOOSE RUNNING SHOES</div>
        <div style={Collection.Desp}>
          Team up with adidas and use our running shoe finder to choose your
          ideal running shoe.
        </div>
        <div
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "65px",
            fontSize: "15px",
          }}
        >
          LEARN MORE
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
