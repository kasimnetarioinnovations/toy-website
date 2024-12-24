import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { BiChevronDown } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Website from "../../Assets/Image/website-logo.png";
import { GiDuck } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs"; //icon
import { BiBookAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { GiComb } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      {/* top section */}

      <div className="mobile">
        {/* 1st div */}
        <div className="" style={{ display: "flex", gap: "10px" }}>
          <span>
            <FiPhoneCall style={{ fontSize: "22px" }} />
          </span>
          <span>+91 8888 4444 20</span>
        </div>
        {/* 2nd div */}
        <div className="" style={{ display: "flex", gap: "10px" }}>
          <span>
            <FaCarSide style={{ color: "#f9c542", fontSize: "30px" }} />
          </span>
          <span className="">Free shipping on orders above 799</span>
          <span className="px-2">
            English
            <BiChevronDown />
          </span>
        </div>
      </div>

      <div className="navbar">
        <div className="logo">
          <img src={Website} alt="" />
          <a href="#">PlayPaloozo</a>
        </div>

        <div className={`nav-links ${isActive ? "dnone" : " "}`}>
          <ul className={` links `}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">
                Categories
                <RiArrowDropDownLine className="fs-2" />
              </a>

              <ul className={`htmlCss-sub-menu sub-menu`}>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <GiDuck style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Toys</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <BiBookAlt style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Stationary</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <GiComb style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Hair Accessories</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <BiShoppingBag
                      style={{ color: "#8565d1", fontSize: "40px" }}
                    />
                    <a href="Toys">Bags</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
              </ul>
            </li>

            {/* 2nd drop down for boy */}

            <li>
              <a href="#">
                Boys
                <RiArrowDropDownLine className="fs-2" />
              </a>
              <i className="bx bxs-chevron-down htmlcss-arrow arrow"></i>
              <ul className={`htmlCss-sub-menu sub-menu `}>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <GiDuck style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Toys</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <BiBookAlt style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Stationary</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <GiComb style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Hair Accessories</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <BiShoppingBag
                      style={{ color: "#8565d1", fontSize: "40px" }}
                    />
                    <a href="Toys">Bags</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
              </ul>
            </li>

            {/* 3rd dropdown for girl */}

            <li>
              <a href="#">
                Girl
                <RiArrowDropDownLine className="fs-2" />
              </a>
              <i className="bx bxs-chevron-down htmlcss-arrow arrow"></i>
              <ul className={`htmlCss-sub-menu sub-menu `}>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <GiDuck style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Toys</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <BiBookAlt style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Stationary</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <GiComb style={{ color: "#8565d1", fontSize: "40px" }} />
                    <a href="Toys">Hair Accessories</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
                <li className="d-flex flex-column">
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ gap: "10px" }}
                  >
                    <BiShoppingBag
                      style={{ color: "#8565d1", fontSize: "40px" }}
                    />
                    <a href="Toys">Bags</a>
                    <p
                      className="new"
                      style={{
                        color: "#4ba37d",
                        backgroundColor: "#ecfdf3",
                        fontSize: "10px",
                      }}
                    >
                      New
                    </p>
                  </div>
                  <span className="seemore-btn">
                    See more
                    <BsArrowRight />
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Stationary</a>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-around align-items-center">
          <div className="d-flex gap-4">
            <button
              className="login-btn"
              style={{ backgroundColor: "transparent", color: "#676969" }}
            >
              Login
            </button>
            <button
              className="login-btn"
              style={{ backgroundColor: "#8565d1", color: "white" }}
            >
              Shop
            </button>
          </div>

          <TiThMenu className="menubtn" onClick={toggleClass} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
