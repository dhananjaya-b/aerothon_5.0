import React from "react";
import AddSubAssebmly from "./AddSubAssebmly";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import SubAssemblyTable from "./SubAssemblyTable";



const SubAssembleHome = () => {
    let componentToRender;
    const [selectedComponent, setSelectedComponent] = useState("FabricTable");
    function handleOptionClick(option) {
      setSelectedComponent(option);
    }

    switch (selectedComponent) {
      case "SubAssemblyTable":
        componentToRender = <SubAssemblyTableblyTable />;
        break;

      case "addnewdata":
        componentToRender = <AddSubAssebmly />;
        break;

      default:
        componentToRender = <SubAssemblyTable />;
    }
  return (
    <>
      <header class="header">
        <div class="container">
          <div class="header__logo">
            <h1 class="header__logo__name">Logo</h1>
          </div>
          <nav class="header__nav">
            <ul class="header__menu">
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("SubAssemblyTable")}
                >
                  Data
                </a>
              </li>
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("addnewdata")}
                >
                  Add New Data
                </a>
              </li>
              <li class="header__item">
                <Link class="header__link" to={"/"}>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {componentToRender}
    </>
  );
};

export default SubAssembleHome;
