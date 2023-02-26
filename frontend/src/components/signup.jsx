import { useRef } from "react";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = ({ value }) => {
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
    email: {
      width: "90%",
    },
  };

  const emailRef = useRef();
  const passRef = useRef();
  const rePassRef = useRef();

  const signupButton = async () => {
    if (passRef.current.value === rePassRef.current.value) {
      const res = await instance.post("/customers", {
        username: emailRef.current.value,
        password: passRef.current.value,
      });
      console.log(res.data.data);
    } else {
      toast("did not match password");
    }
  };
  return (
    <div className="signup" style={stylesLogin.signup}>
      <div className="signupContainer" style={stylesLogin.signupContainer}>
        <div className="signupTitle" style={stylesLogin.signupTitle}>
          Sign Up
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
          <div className="passwordContainer" style={stylesLogin.miniContainer}>
            <div className="email" style={stylesLogin.email}>
              repeat password
            </div>
            <input
              type="text"
              className="signInput"
              style={stylesLogin.input}
              ref={rePassRef}
            />
          </div>
        </div>
        <div className="signupToLogin">
          if you have an account
          <div className="login">login</div>
        </div>
        <div className="submitContainer" style={stylesLogin.miniContainer}>
          <button
            className="submit"
            style={stylesLogin.button}
            onClick={signupButton}
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SignUp;
