const Body = () => {
  return (
    <>
      <div>
        <div className="Body">
          <h1>ADIDAS SPORTSWEAR</h1>
          <div>
            The You-niform. Sportswear born on the pitch, reimagined for
            everyday.
          </div>
          <button>SHOP WOMAN</button>
          <button>SHOP MAN</button>
        </div>
        <div className="cards">
          <div className="headerCards">
            <div className="card">
              <img
                src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/22960621dd9043d08985af7f010c1c83_9366/ultraboost-light-running-shoes.jpg"
                alt=""
              />
              <a href="">SHOES</a>
            </div>
            <div className="card">
              <img
                src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/a56d13d0e78646819f43ac85000e093a_9366/aeroready-designed-to-move-woven-sport-shorts.jpg"
                alt=""
              />
              <a href="">CLOTHING</a>
            </div>
            <div className="card">
              <img
                src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/17b0c02e79b344229a6cae7601479312_9366/team-issue-tapered-pants.jpg"
                alt=""
              />
              <a href="">BEST SELLERS</a>
            </div>
            <div className="card">
              <img
                src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/1e82d9c973a64c9b878eaf9b01220c23_faec/twill-cargo-pants.jpg"
                alt=""
              />
              <a href="">NEW ARRIVALS</a>
            </div>
          </div>
          <div className="text">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
              New Arrivals
            </h1>
            <h3>What's Trending</h3>
            <h3>Member Exclusives</h3>
            <div className="">
              <h3>VIEW ALL</h3>
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </h1>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto,t_ivy/1e82d9c973a64c9b878eaf9b01220c23_faec/Twill_Cargo_Pants_Blue_HS0739_HM1.jpg"
                alt=""
              />
              <div>Twill Cargo Pants</div>
              <div>Ivy Park</div>
              <p>$170</p>
            </div>
          </div>
        </div>
        <div className="news">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Body;
