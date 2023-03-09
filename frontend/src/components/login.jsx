import { useRef } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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
    },
    signupContainer: {
      width: "30vw",
      height: "600px",
      display: "flex",
      flexDirection: "column",

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
      fontWeight: "bold",
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
      width: "87%",
      height: "45px",
      marginTop: "20px",
      paddingLeft: "10px",
    },
    signSwitch: {
      width: "90%",
      font: "bold",
      display: "flex",
      marginTop: "10px",
      justifyContent: "center",
    },
    signHelper: {
      display: "flex",
      justifyItems: "start",
      flexDirection: "column",
      marginLeft: "34px",
      fontWeight: "bold",
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
        alert("Succesfull");
        navigate(`/${res.data.data._id}`);
      } catch (error) {
        console.log("LOGIN AJILLA");
        toast(error.response.data.error);
      }
    } else {
      if (repassRef.current.value === passRef.current.value) {
        try {
          const res = await instance.post("/customers", {
            username: emailRef.current.value,
            password: passRef.current.value,
          });
          alert("Succesfull");
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
        <div style={stylesLogin.signHelper}>
          <div className="signupTitle" style={stylesLogin.signTitle}>
            LOG IN OR SIGN UP (IT'S FREE)
          </div>
          <div>Enter your email to access or create your account</div>
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
              type="text"
              placeholder="password"
              ref={passRef}
              style={stylesLogin.coolLaber}
            />
          </div>
          <div className="passwordContainer" style={stylesLogin.none}>
            <input
              type="text"
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
