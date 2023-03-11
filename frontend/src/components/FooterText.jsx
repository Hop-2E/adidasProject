import React from "react";

function FooterText() {
  const style = {
    title: {
      fontWeight: "800",
      fontSize: "40px",
      width: "380px",
    },
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F5F5E5",
      display: "flex",
      padding: "80px 0px",
      width: "100vw",
      height: "55vh",
    },
    text: {
      marginTop: "25px",
      width: "740px",
    },
  };
  return (
    <div style={style.main}>
      <div>
        <div style={style.title}>
          Stories, style, and sporting goods at adidas, since 1949
        </div>
        <div style={style.text}>
          Through sports, we have the power to change lives. Sports keep us fit.
          They keep us mindful. They bring us together. Athletes inspire us.
          They help us to get up and get moving. And sporting goods featuring
          the latest technologies help us beat our personal best. adidas is home
          to the runner, the basketball player, the soccer kid, the fitness
          enthusiast, the yogi. And even the weekend hiker looking to escape the
          city. The 3-Stripes are everywhere and anywhere. In sports. In music.
          On life’s stages. Before the whistle blows, during the race, and at
          the finish line. We’re here to support creators. To improve their
          game. To live their lives. And to change the world.
        </div>
        <div style={style.text}>
          adidas is about more than sportswear and workout clothes. We partner
          with the best in the industry to co-create. This way we offer our fans
          the sporting goods, style and clothing that match the athletic needs,
          while keeping sustainability in mind. We’re here to support creators.
          Improve their game. Create change. And we think about the impact we
          have on our world.
        </div>
      </div>
      <div style={{ marginLeft: "100px" }}>
        <div style={style.title}>Workout clothes, for any sport</div>
        <div style={style.text}>
          adidas designs for athletes of all kinds. Creators who love to change
          the game. People who challenge conventions, break the rules, and
          define new ones. Then break them all over again. We design sports
          apparel that gets you moving, winning, and living life to the fullest.
          We create bras and tights for female athletes who play just as hard as
          the men. From low to high support. Maximum comfort. We design,
          innovate and iterate. We test new technologies in action. On the
          field, the track, the court, and in the pool. We’re inspired by retro
          workout clothes, creating new streetwear essentials. From NMD and
          Ozweego to our Firebird tracksuits. From Stan Smith to Superstar.
          Classic sports models are brought back to life on the streets and the
          stages around the world.
        </div>
        <div style={style.text}>
          Through our collections we blur the borders between high fashion and
          high performance. Like our adidas by Stella McCartney athletic
          clothing collection – designed to look the part inside and outside of
          the gym. Or some of our adidas Originals lifestyle pieces, that can be
          worn as sports apparel too. Our lives are constantly changing.
          Becoming more and more versatile. And adidas designs with that in
          mind.
        </div>
      </div>
    </div>
  );
}

export default FooterText;
