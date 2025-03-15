import React, { useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const location = useLocation();
  const [activePgae, SetActivePage] = useState("home");
  const [isOpenMenu, SetIsopenMenu] = useState(false);

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div className="menubar" onClick={() => SetIsopenMenu(!isOpenMenu)}>
        <IoMdMenu />
      </div>
      <div
        onClick={() => SetIsopenMenu(!isOpenMenu)}
        className={`navBar ${isOpenMenu === true ? "openMenu" : ""}`}
      >
        <div className="logo">Aivy Beauty</div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/"}
          className={`page ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => SetActivePage("home")}
        >
          HomePage{" "}
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/about"}
          className={`page ${location.pathname === "/about" ? "active" : ""}`}
          onClick={() => SetActivePage("about")}
        >
          About{" "}
        </Link>
        <div
          className={`page ${activePgae === "service" ? "active" : ""}`}
          onClick={() => SetActivePage("service")}
        >
          Our Services
        </div>
        <div
          className={` page ${activePgae === "contact" ? "active" : ""}`}
          onClick={() => SetActivePage("contact")}
        >
          Get in Touch{" "}
        </div>
        <div className="book">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/5-start-nail-booking"}
          >
            {" "}
            Book an Appointment{" "}
          </Link>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default NavBar;
