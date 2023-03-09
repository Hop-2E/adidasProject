import React from "react";

function Stories() {
  const style = {
    title: {
      fontWeight: "bolder",
      fontSize: "25px",
      marginLeft: "235px",
    },
    Main: {
      width: "100vw",
      marginTop: "90px",
    },
    Container: {
      width: "19vw",
      marginLeft: "10px",
      height: "45vh",
    },
    HelperMain: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "19vw",
      height: "25vh",
    },
    desp: {
      width: "17.55vw",
      fontWeight: "bolder",
      paddingLeft: "15px",
      fontSize: "15px",
      position: "absolute",
      marginTop: "-20px",
      marginLeft: "15px",
      backgroundColor: "white",
    },
    text: {
      paddingLeft: "30px",
    },
  };
  return (
    <div style={style.Main}>
      <div style={style.title}>MORE FROM ADIDAS STORIES</div>
      <div style={style.HelperMain}>
        <div style={style.Container}>
          <img
            style={style.image}
            src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/2021/11/forum-size-guide-masthead-d_221-807066.jpg"
            alt=""
          />
          <div style={style.desp}>THE DEFINITIVE ADIDAS FORUM SIZE GUIDE</div>
          <div style={style.text}>
            Curious about where to start with adidas Forum sizing? Look no
            further to learn about how the iconic sneakers fit before even
            trying them on.
          </div>
        </div>
        <div style={style.Container}>
          <img
            style={style.image}
            src=" https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/soccer-offside-rules-blog-thumbnail-d_221-953959.jpg
            "
            alt=""
          />
          <div style={style.desp}>OFFSIDES IN SOCCER: EXPLAINED</div>
          <div style={style.text}>
            Watching a match? Get the scoop on the rules of the game, starting
            with the offside soccer rule, explained by adidas.
          </div>
        </div>{" "}
        <div style={style.Container}>
          <img
            style={style.image}
            src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/ultraboost-light-size-guide-blog-thumbnail-d_221-992396.jpg"
            alt=""
          />
          <div style={style.desp}>THE ONLY ULTRABOOST SIZING GUIDE</div>
          <div style={style.text}>
            Upgrade your runs with the all new adidas Ultraboost Light. Read our
            size guide to discover the differences between the different shoes
            in the Ultraboost line.
          </div>
        </div>{" "}
        <div style={style.Container}>
          <img
            style={style.image}
            src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/what-are-soccer-penalty-kicks-blog-thumbnail-d_221-952992.jpg"
            alt=""
          />
          <div style={style.desp}>WHAT IS A PENALTY KICK IN SOCCER</div>
          <div style={style.text}>
            Are you curious about what a penalty kick is, when it happens and
            what the rules are? Read about what they are and when they happen
            with adidas.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
