import { useEffect, useState } from "react";
import {  useLocation } from 'react-router-dom';

export default function Header() {
  const [hasLogo, setHasLogo] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 81) {
        setHasLogo(true);
      } else {
        setHasLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

    <>
      {/* Start Topbar */}
      <div className="topbar d-none d-lg-block topbar-bg bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-3 col-xl-4">
              <a href="/" className="headerLogo">
                <img
                  src={`../assets/keyon_img/logo-2.png`}
                  alt=""
                  height="40"
                />
              </a>
            </div>
            <div className="col-md-8 col-lg-9 col-xl-8 d-none d-md-block">
              <div className="d-flex justify-content-end">
                <div className="d-flex align-items-center help-info ms-4">
                  <div className="flex-shrink-0 icon">
                    <i className="fa-solid fa-mobile-button fs-30 text-white opacity-75"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fs-15 fw-semibold help-info__title mb-0 text-white">
                      +91-9550917866
                    </h6>
                    <p className="sub-text mb-0 fs-14">Contact Us For Help</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.End Topbar */}
      {/* Start Navbar */}
      <div
        className={
          hasLogo
            ? "has-logo navbar-wrap sticky-top"
            : "no-logo navbar-wrap sticky-top"
        }
      >
        <div className="container-lg nav-container position-relative">
          <nav className="custom-navbar navbar navbar-expand-lg">
            {/* Start Navbar Brand */}
            <a
              className="border-end navbar-brand pe-3 pe-sm-4 py-0"
              href="/"
            >
              <img
                className="logo-dark"
                src={`../assets/keyon_img/logo.png`}
                alt=""
              />
              <img
                className="logo-white"
                src={`../assets/keyon_img/logo-2.png`}
                alt=""
              />
            </a>
            {/* End Navbar Brand */}
            {/* Start Navbar Collapse */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Start Navbar Collapse Header */}
              <div className="align-items-center border-bottom d-flex d-lg-none justify-content-between mb-3 navbar-collapse__header pb-3">
                {/* Start Brand Logo For Mobile */}
                <div className="collapse-brand flex-shrink-0">
                  <a href="/">
                    <img src={`../assets/keyon_img/logo.png`} alt="" />
                  </a>
                </div>
                {/* End Brand Logo For Mobile */}
                {/* Start Collapse Close Button */}
                <div className="flex-grow-1 ms-3 text-end">
                  <button
                    type="button"
                    className="bg-transparent border-0 collapse-close p-0 position-relative"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span> <span></span>
                  </button>
                </div>
                {/* End Collapse Close Button */}
              </div>
              {/* End Navbar Collapse Header */}
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link ${path === "/" ? "active" : ""}`}
                    href="/"
                    role="link"
                  >
                    Home
                 </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      path === "/properties" ? "active" : ""
                    }`}
                    href={"/properties"}
                  >
                    Properties
                 </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      path === "/about-us" ? "active" : ""
                    }`}
                    href="/about-us"
                  >
                    About Us
                 </a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                 </a>
                  <ul className="dropdown-menu mega-menu">
                    <li>
                      <span className="row">
                        <span className="col-6">
                          {links.slice(0, 13).map((link) => {
                            return (
                              <a
                                key={`${link.href}${link.text}`}
                                href={link.href}
                                className={`dropdown-item col-6 ${
                                  path === link.href ? "active" : ""
                                }`}
                              >
                                {link.text}
                             </a>
                            );
                          })}
                        </span>
                        <span className="col-6">
                          {links.slice(13, 26).map((link) => {
                            return (
                              <a
                                key={`${link.href}${link.text}`}
                                href={link.href}
                                className={`dropdown-item col-6 ${
                                  path === link.href ? "active" : ""
                                }`}
                              >
                                {link.text}
                             </a>
                            );
                          })}
                        </span>
                      </span>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      path === "/contact-us" ? "active" : ""
                    }`}
                    href="/contact-us"
                  >
                    Contact
                 </a>
                </li>
              </ul>
            </div>
            {/*  /. End Navbar Collapse */}
            <div className="d-flex gap-1 ms-lg-5">
              {/* Start Cart Button */}

              {/*  Start Navbar Toggler Buton */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/*  /. End Navbar Toggler Buton */}
            </div>
          </nav>
        </div>
        {/* /.End of navbar */}
      </div>
      {/* /.End of navbar */}
    </>
  
  );
}
