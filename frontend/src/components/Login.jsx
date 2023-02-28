import { useRef } from "react";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const Login = ({ value }) => {
  const [switched, setSwitched] = useState(false);
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
      backgroundColor: "yellow",
      display: value,
      position: "fixed",
      top: 200,
      left: "35vw",
      border: "1px solid black",
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
      borderRadius: "10px",
      border: "0.5px solid grey",
    },
    button: {
      width: "90%",
      height: "50px",
      margin: "20px",
      borderRadius: "10px",
      border: "0.5px solid grey",
      backgroundColor: "green",
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
      } catch (error) {
        toast(error.response.data.error);
      }
    } else {
      if (repassRef.current.value === passRef.current.value) {
        try {
          const res = await instance.post("/customers", {
            username: emailRef.current.value,
            password: passRef.current.value,
          });
        } catch (error) {
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
        <div className="signupTitle" style={stylesLogin.signupTitle}>
          {switched ? "signup" : "login"}
        </div>
        <div className="inputContainer" style={stylesLogin.inputContainer}>
          <div className="emailContainer" style={stylesLogin.miniContainer}>
            <div className="email" style={stylesLogin.email}>
              email
            </div>
            <input
              type="text"
              className="signInput"
              style={stylesLogin.input}
              ref={emailRef}
            />
          </div>
          <div className="passwordContainer" style={stylesLogin.miniContainer}>
            <div className="email" style={stylesLogin.email}>
              password
            </div>
            <input
              type="text"
              className="signInput"
              style={stylesLogin.input}
              ref={passRef}
            />
          </div>
          <div className="passwordContainer" style={stylesLogin.none}>
            <div className="email" style={stylesLogin.email}>
              password
            </div>
            <input
              type="text"
              className="signInput"
              style={stylesLogin.input}
              ref={repassRef}
            />
          </div>
        </div>
        <div className="signupToLogin">
          if you dont have an account
          <div className="signupJumper" onClick={loginToSignup}>
            signup
          </div>
        </div>
        <div className="submitContainer" style={stylesLogin.miniContainer}>
          <button
            className="submit"
            style={stylesLogin.button}
            onClick={loginButton}
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Login;