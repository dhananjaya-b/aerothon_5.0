import React from "react";
import "../styles/login.css";
import {  Link  } from "react-router-dom";
const Login = () => {
  return (
    <div
      style={{
        width: "400px",
        height: "500px",
        borderRadius: "15px",
        marginTop: "150px",
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          position: "relative",
          left: "-30%",
          fontSize: "1.8rem",
        }}
      >
        Login
      </h2>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        

        <button type="submit" class="btn">
          Login
        </button>
      </form>
      <div class="con">
        <p>don't have account?&nbsp;</p>
        <Link to="/signup"> sign in</Link>
      </div>
    </div>
  );
};

export default Login;
