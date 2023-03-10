import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import "../App.css";
import CreateItem from "./CreateItem";
const Header = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState();
  const [displayLogin, setdisplayLogin] = useState({
    display: "none",
    isDisplay: false,
  });
  const [createDisplay, setCreateDisplay] = useState({
    display: "none",
    isDisplay: false,
  });

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = () => {
    if (JSON.parse(localStorage.getItem("role")) === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  const loginPage = () => {
    if (displayLogin.isDisplay === false) {
      setdisplayLogin({ display: "inline", isDisplay: true });
    } else {
      setdisplayLogin({ display: "none", isDisplay: false });
    }
  };

  const createItem = () => {
    if (createDisplay.isDisplay === false) {
      setCreateDisplay({ display: "inline", isDisplay: true });
    } else {
      setCreateDisplay({ display: "none", isDisplay: false });
    }
  };

  const searchButton = () => {
    navigate(`./${searchRef.current.value}`);
  };
  return (
    <>
      <div className="headerZero">
        <h4>GET A $20 BONUS REWARD</h4>
        <h4>FREE STANDARD SHIPPING & RETURNS</h4>
        <h4>FRESH SALE STYLES: UP TO 50% OFF</h4>
      </div>
      <div className="header">
        <div>
          <Link to={"/"}>
            <img alt="" className="logo" />
          </Link>
        </div>

        <div className="mainHeader">
          <div className="hovered">MEN </div>
          <div className="hovered">WOMEN </div>
          <div className="hovered">KIDS </div>
          <div className="hovered">SALE </div>
          <div className="hovered">3 SRTRIPE LIFE</div>
        </div>
        <div className="rightHeader">
          <div className="rightHeaderDiv">
            <div>help</div>
            <div>exchanges & returns</div>
            <div>order tracker</div>
            <div>join adiclub</div>
          </div>
          <div className="rightHeaderDiv">
            <div
              style={{
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="search"
                placeholder="Search"
                style={{ border: "none" }}
                ref={searchRef}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                onClick={searchButton}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
                onClick={loginPage}
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </div>
            <div>
              <Link to="./wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Link>
            </div>
            <div>
              <Link to="./sags">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </Link>
            </div>
            {admin ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                  onClick={createItem}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <Login value={displayLogin.display} />
        <CreateItem value={createDisplay.display} />
      </div>
    </>
  );
};
export default Header;
const styles = {
  headerZero: {
    height: "40px",
    width: "100vw",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    height: "80px",
    width: "100vw",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    flexdirection: "row",
    height: "100px",
    width: "140px",
  },
  mainHeader: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "15px",
  },
};
