import { useRef } from "react";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ value }) => {
  const [switched, setSwitched] = useState(false);
  const navigates = useNavigate();
  const loginToSignup = () => {
    if (switched) {
      setSwitched(false);
    } else {
      setSwitched(true);
    }
  };

  const stylesLogin = {
    signup: {
      width: "30vw",
      height: "600px",
      backgroundColor: "white",
      display: value,
      position: "fixed",
      top: 200,
      left: "35vw",
      border: "1px solid black",
      zIndex: "1",
    },
    signupContainer: {
      width: "30vw",
      height: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    signupTitle: {
      fontSize: "30px",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    input: {
      width: "90%",
      height: "50px",
      margin: "20px",
      border: "0.5px solid grey",
    },
    button: {
      width: "90%",
      height: "50px",
      margin: "20px",
      border: "0.5px solid grey",
      backgroundColor: "black",
      color: "white",
      font: "bold",
      fontSize: "21px",
    },
    miniContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    none: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      visibility: switched ? "" : "hidden",
    },
    email: {
      width: "90%",
    },
    signTitle: {
      fontSize: "30px",
    },
    coolLaber: {
      width: "90%",
      height: "45px",
      marginTop: "20px",
    },
    signSwitch: {
      width: "90%",
      font: "bold",
      display: "flex",
      marginTop: "10px",
      justifyContent: "center",
    },
  };

  const emailRef = useRef();
  const passRef = useRef();
  const repassRef = useRef();

  const loginButton = async () => {
    if (!switched) {
      try {
        const res = await instance.post("/customers/login", {
          username: emailRef.current.value,
          password: passRef.current.value,
        });
        toast("successful");
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user_id", JSON.stringify(res.data.data._id));
        localStorage.setItem("role", JSON.stringify(res.data.data.role));
        navigates(`/${res.data.data._id}`);
        window.location.reload();
      } catch (error) {
        console.log("LOGIN AJILLA");
        toast(error.response.data.error);
      }
    } else {
      if (repassRef.current.value === passRef.current.value) {
        try {
          await instance.post("/customers", {
            username: emailRef.current.value,
            password: passRef.current.value,
          });
          alert("succesfull");
        } catch (error) {
          console.log(emailRef, passRef);
          toast(error.response.data.error);
        }
      } else {
        toast("does not match password");
      }
    }
  };

  return (
    <div className="signup" style={stylesLogin.signup}>
      <div className="signupContainer" style={stylesLogin.signupContainer}>
        <div className="signupTitle" style={stylesLogin.signTitle}>
          LOG IN OR SIGN UP (IT'S FREE)
        </div>
        <div className="inputContainer" style={stylesLogin.inputContainer}>
          <div className="emailContainer" style={stylesLogin.miniContainer}>
            <input
              type="text"
              placeholder="email"
              ref={emailRef}
              style={stylesLogin.coolLaber}
            />
          </div>
          <div className="passwordContainer" style={stylesLogin.miniContainer}>
            <input
              type="password"
              placeholder="password"
              ref={passRef}
              style={stylesLogin.coolLaber}
            />
          </div>
          <div className="passwordContainer" style={stylesLogin.none}>
            <input
              type="password"
              ref={repassRef}
              placeholder="password again"
              style={stylesLogin.coolLaber}
            />
          </div>
        </div>
        <div className="signupToLogin" style={stylesLogin.signSwitch}>
          if you dont have an account
          <div
            style={{ marginLeft: 5 }}
            className="signupJumper"
            onClick={loginToSignup}
          >
            {switched ? "login" : "signup"}
          </div>
        </div>
        <div className="submitContainer" style={stylesLogin.miniContainer}>
          <button
            className="submit"
            style={stylesLogin.button}
            onClick={loginButton}
          >
            CONTINUE
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Login;
