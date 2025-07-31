import React from "react";
import ScrollTop from "./scroll-top";


export default function Footer() {
  return (
    <>
      {/* Start Footer */}
      <ScrollTop />
      <footer
        className="main-footer footer-dark background-image"
        data-image-src="../assets/keyon_img/house.webp"
      >
        <div className="container pt-4">
          {/* Start Card Contact */}
          <div
            className="card-contact bg-primary mb-4 mt-5 py-5 px-4 px-md-5 position-relative overflow-hidden rounded-3 shadow-lg"
            data-aos="fade-down"
          >
            <div className="row align-items-center position-relative z-1">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <h2 className="display-6 fw-bold mb-0 mb-4 text-capitalize text-white">
                  Are you looking to buy or sell a property? Get in touch today
                </h2>
                <div className="row g-4 align-items-center">
                  <div className="col-auto">
                    <button
                      type="button"
                      className="btn btn-outline-default border-0"
                    >
                      <i className="fas fa-mobile"></i>
                      <span>+91-9550917866</span>
                    </button>
                  </div>
                  <div className="col-auto">
                    <a
                      href="#"
                      className="border-bottom fs-17 l-spacing-1 text-white"
                    >
                      <i className="fas fa-envelope fs-15"></i>
                      <span>info@keyonprop.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Card Background Image */}
            <div className="card-sketch">
              <img
                src={`../assets/keyon_img/house.webp`}
                alt=""
                className="card-sketch-image"
              />
            </div>
            {/* /.End Card Background Image */}
          </div>
          {/* .End Card Contact  */}
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 pe-xl-5 text-center">
              <div className="footer-about">
                <p>
                  Keyon Properties Pvt.Ltd,
                  Sy no:196, 3rd floor, Subishi's Town Center,
                  Mokila, Shankarpally Mandal, RR Dist,
                  Hyderabad, Telangana, 501203
                </p>
                <a
                  className="email-link d-block fw-medium mb-1"
                  href="tel:+919550917866"
                >
                  <i className="fa-solid fa-phone me-2"></i>
                  <span>+91-9550917866</span>
                </a>
                <a
                  className="email-link d-block fw-medium"
                  href="mailto:info@keyonprop.com"
                >
                  <i className="fa-solid fa-envelope me-2"></i>
                  <span>info@keyonprop.com</span>
                </a>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-auto col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                Main Pages
              </h3>
              {/* /Start Footer Link  */}
              <ul className="footer-link list-unstyled menu mb-0">
                <li className="mb-2">
                  <a href="/" className="link d-block">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/properties" className="link d-block">
                    Properties
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact-us" className="link d-block">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* /.End Footer Link  */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-auto col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                Quick Links
              </h3>
              {/* /Start Footer Link  */}
              <ul className="footer-link list-unstyled menu mb-0">
                <li className="mb-2">
                  <a href="/properties/Properties_In_Gachibowli" className="link d-block">
                    Properties In Gachibowli
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/properties/Properties_In_Kokapet" className="link d-block">
                  Properties In Kokapet
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/properties/Properties_In_Financial_Dist" className="link d-block">
                  Properties In Financial Dist
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/properties/Properties_In_Neopolis" className="link d-block">
                  Properties In Neopolis
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/properties/Properties_In_Narsing" className="link d-block">
                  Properties In Narsing
                  </a>
                </li>
              </ul>
              {/* /.End Footer Link  */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                Connect with us
              </h3>
              {/* /Start Social Icon */}
              <ul className="list-unstyled social-icon">
                <li>
                  <a href="https://www.instagram.com/keyonproperties/" className="align-items-center d-flex">
                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white inst">
                      <i className="fab fa-instagram"></i>
                    </div>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="align-items-center d-flex">
                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white twi">
                      <i className="fab fa-twitter"></i>
                    </div>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Keyonproperties" className="align-items-center d-flex">
                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white fb">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=+919550917866&text=Hi!%20" className="align-items-center d-flex">
                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white whatsapp">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=+919550917866&text=Hi!%20" className="align-items-center d-flex">
                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white fb">
                      <i className="fab fa-linkedin"></i>
                    </div>
                    LinkedIn
                  </a>
                </li>
              </ul>
              {/* /.End Social Icon */}
            </div>
          </div>
          <hr className="mb-0 mt-4" />
          <div className="py-4">
            {/* Start Sub Footer Nav */}
            <ul className="list-unstyled list-separator mb-2 footer-nav">
              <li className="list-inline-item">
                <a href="/privacy-policy">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Sitemap</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Cookies</a>
              </li>
              <li className="list-inline-item">
                <a href="terms-conditions">Terms &amp; Conditions</a>
              </li>
            </ul>
            {/*  /. End Sub Footer Nav */}
            <div className="align-items-center row mb-2">
              {/* Start Footer Logo */}
              <div className="col-sm-auto footer-logo mb-3 mb-sm-0">
                <img
                  className="footer-logo__dark"
                  src={`../assets/keyon_img/logo-2.png`}
                  alt=""
                />
              </div>
              {/* /.End Footer Logo  */}
              {/* Start Copy Rights Text */}
              <div className="col-sm-auto copy">
                © 2024 Keyon Properties - All Rights Reserved
              </div>
              {/* /.End Copy Rights Text */}
            </div>
          </div>
        </div>
      </footer>
      {/* /.End Footer */}
    </>
  );
}
