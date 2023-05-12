import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div
      style={{
        width: "400px",
        height: "500px",
        borderRadius: "15px",
        marginTop: "100px",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          position: "relative",
          left: "-27%",
          fontSize: "1.8rem",
        }}
      >
        Sign Up
      </h2>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Name"
          />
        </div>

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

        <div class="form-group">
          <label
            htmlFor="roles"
            style={{ width: "25%", marginRight: "5%", fontSize: "1.2rem" }}
          >
            Roles :
          </label>
          <select name="roles" id="roles" placeholder="Roles">
                      <option value="fabrication">Fabrication</option>
            <option value="sub-assembly">Sub Assembly</option>
            <option value="assembly">Assembly</option>
          </select>
        </div>

        <button type="submit" class="btn">
          Login
        </button>
      </form>
      <div class="con">
        <p>Already have account?&nbsp;</p>
        <Link to="/login"> login</Link>
      </div>
    </div>
  );
};

export default SignUp;
