import React, { useRef, useEffect } from "react";
import logo from "../../assets/Logo.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const primaryNavRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const navigate = useNavigate();
  const handleProfilesClick = () => {
    document.body.style.background =
    "linear-gradient(90deg, rgb(239, 242, 247) 0%, 7.60286%, rgb(237, 240, 249) 15.2057%, 20.7513%, rgb(235, 239, 248) 26.297%, 27.6386%, rgb(235, 239, 248) 28.9803%, 38.2826%, rgb(231, 237, 249) 47.585%, 48.1216%, rgb(230, 236, 250) 48.6583%, 53.1306%, rgb(228, 236, 249) 57.6029%, 61.5385%, rgb(227, 234, 250) 65.4741%, 68.7835%, rgb(222, 234, 250) 72.093%, 75.7603%, rgb(219, 230, 248) 79.4275%, 82.8265%, rgb(216, 229, 248) 86.2254%, 87.8354%, rgb(213, 228, 249) 89.4454%, 91.8605%, rgb(210, 226, 249) 94.2755%, 95.4383%, rgb(209, 225, 248) 96.6011%, 98.3005%, rgb(208, 224, 247) 100%)";
    const userEmail = localStorage.getItem("email");
    const userStatus = localStorage.getItem("status");
    if (userEmail && userStatus) {
      navigate("/diseaseprofiles");
    } else {
      navigate("/signin");
    }
  };

  const handleToggleClick = () => {
    const isExpanded = primaryNavRef.current.getAttribute("aria-expanded");
    primaryNavRef.current.setAttribute(
      "aria-expanded",
      isExpanded === "false" ? "true" : "false"
    );
  };

  const handleContainerClick = (e) => {
    if (
      !primaryNavRef.current.contains(e.target) &&
      !toggleButtonRef.current.contains(e.target)
    ) {
      primaryNavRef.current.setAttribute("aria-expanded", "false");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleContainerClick);

    return () => {
      document.removeEventListener("click", handleContainerClick);
    };
  }, []);

  const handleTabClick = () => {
    document.body.style.background =
    "linear-gradient(90deg, rgb(239, 242, 247) 0%, 7.60286%, rgb(237, 240, 249) 15.2057%, 20.7513%, rgb(235, 239, 248) 26.297%, 27.6386%, rgb(235, 239, 248) 28.9803%, 38.2826%, rgb(231, 237, 249) 47.585%, 48.1216%, rgb(230, 236, 250) 48.6583%, 53.1306%, rgb(228, 236, 249) 57.6029%, 61.5385%, rgb(227, 234, 250) 65.4741%, 68.7835%, rgb(222, 234, 250) 72.093%, 75.7603%, rgb(219, 230, 248) 79.4275%, 82.8265%, rgb(216, 229, 248) 86.2254%, 87.8354%, rgb(213, 228, 249) 89.4454%, 91.8605%, rgb(210, 226, 249) 94.2755%, 95.4383%, rgb(209, 225, 248) 96.6011%, 98.3005%, rgb(208, 224, 247) 100%)";
  }

  return (
    <div className="container">
      <header className="site-header">
        <div className="header__content--flow">
          <section className="header-content--left">
            <img className="brand-logo" src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={handleToggleClick}
              ref={toggleButtonRef}
            >
              <span className="toggle--icon"></span>
            </button>
          </section>
          <section className="header-content--right">
            <nav className="header-nav" role="navigation">
              <ul className="nav__list" ref={primaryNavRef}>
                <li className="list-item">
                  <a className="nav__link" href="#home">
                    Home
                  </a>
                </li>
                <li className="list-item" onClick={handleTabClick}>
                  <Link to="/signin" className="nav__link">
                    Sign In
                  </Link>
                </li>
                <li className="list-item" onClick={handleProfilesClick}>
                  <Link to="/diseaseprofiles" className="nav__link">
                    Profiles
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </header>
    </div>
  );
};
