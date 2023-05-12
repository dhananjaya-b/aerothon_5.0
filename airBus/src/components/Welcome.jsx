import React from "react";
import googleLog from "../assets/Vector.png"
import { Link } from "react-router-dom";
import "../styles/welcome.css";
const Welcome = () => {
    return (
      <div className="welcomebody">
        <h1>Welcome to the app!</h1>
        <div>
          <button
            style={{
              width: "30%",
              marginRight: "3%",
              backgroundColor: "#20ab6c",
            }}
          >
            <Link
              to={"/login"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                color: "white",
              }}
            >
              {" "}
              Login
            </Link>
          </button>
          <button style={{ width: "30%" }}>
            <Link
              to={"/signup"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                color: "white",
              }}
            >
              {" "}
              SignUp
            </Link>
          </button>
        </div>
      </div>
    );
};

export default Welcome;
