import React from "react";
import FooterBlack from "../components/footer-components/FooterBlack";
import { useState } from "react";
import { instance } from "../App";
import { useNavigate } from "react-router-dom";
function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const LoginPost = async () => {
    try {
      const res = await instance.post("/customers", {
        username: name,
        password: password,
      });
      alert("Succesfull");
      navigate(`/Home/${res.data.data._id}`);
      window.localStorage.setItem("user_id", JSON.stringify(res.data.data._id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="mainLogin">
        <input
          onChange={(e) => setName(e.target.value)}
          type="mail"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button onClick={LoginPost}>Create account or Login!</button>
      </div>
      <FooterBlack />
    </div>
  );
}

export default Login;
