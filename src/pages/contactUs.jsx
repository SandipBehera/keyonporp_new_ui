import React, { useEffect } from "react";
import Layout from "../components/layout";
import { trackVisitor } from "../fetch_logic/fetch_property_data";

const ContactUs = () => {
   const visitor= async () => {
      await trackVisitor('contact_us');
    }
    useEffect(() => {
      visitor();
    }
    , []);
    return(
        <Layout
        metaTitle={"Contact us : KeyonProperties | Hyderabad Leading Realestate Consultancy"}
        metaDescription={"KeyonProperties Consultans and agency in hyderabad one of the leading website in hyderabad with 30+ A1 projects KeyonProp.com"}
        metaKeywords={"KeyonProperties, KeyonProp, KeyonProp.com, KeyonProperties Consultans, KeyonProperties agency, KeyonProperties hyderabad, KeyonProperties leading website, KeyonProperties 30+ A1 projects"}
        >
        {/* Start Main Content */}
        <div className="main-content">
          <div className="border-bottom py-3">
            <div className="container">
              {/* Start Breadcrumbs */}
              <div className="row gy-2 gx-4 gx-md-5">
                <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                  Contact Us
                </h4>
                <div className="border-start col-auto">
                  <ol className="align-items-center breadcrumb fw-medium mb-0">
                    <li className="breadcrumb-item d-flex align-items-center">
                      <a href="/" className="text-decoration-none">
                        <i className="fa-solid fa-house-chimney-crack fs-18" />
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item d-flex align-items-center active"
                      aria-current="page"
                    >
                      Contact
                    </li>
                  </ol>
                </div>
              </div>
              {/* End Breadcrumbs */}
            </div>
          </div>
          {/* Start Map Content */}
          
          {/* /.End Map Content */}
          <div className="contact-info">
            <div className="container">
              <div className="row g-4 justify-content-center">
                <div className="col-sm-6 col-lg-4 d-flex">
                  {/* Start Card */}
                  <div
                    className="border-0 card flex-fill rounded-3 shadow w-100"
                    data-aos="fade"
                    data-aos-delay={300}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="box-icon">
                        <i className="fa-headset fa-solid fs-40 mb-4 text-primary" />
                      </div>
                      <h4>Call us</h4>
                      <p className="fs-15">
                        Many desktop publishing packages and web page editors now
                        use Lorem.
                      </p>
                      <div className="d-grid d-xl-flex gap-2 justify-content-center">
                        <div className="border d-inline-block fw-medium px-3 py-1 rounded text-primary">
                          <a href="tel:+919550917866">  
                          <i className="fa-solid fa-mobile-button me-2"></i>+91-9550917866
                          </a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  {/* /.End Card */}
                </div>
                <div className="col-sm-6 col-lg-4 d-flex">
                  {/* Start Card */}
                  <div
                    className="border-0 card flex-fill rounded-3 shadow w-100"
                    data-aos="fade"
                    data-aos-delay={400}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="box-icon">
                        <i className="fa-envelope-circle-check fa-solid fs-40 mb-4 text-danger" />
                      </div>
                      <h4>Email us</h4>
                      <p className="fs-15">
                        There are many variations of passages of Lorem Ipsum
                        available,
                      </p>
                      <a
                        href="mailto:info@keyonprop.com"
                        className="fw-medium"
                      >
                        <i className="fa-solid fa-envelope me-2" />
                        info@keyonprop.com
                      </a>
                    </div>
                  </div>
                  {/* /.End Card */}
                </div>
                <div className="col-sm-6 col-lg-4 d-flex">
                  {/* Start Card */}
                  <div
                    className="border-0 card flex-fill rounded-3 shadow w-100"
                    data-aos="fade"
                    data-aos-delay={500}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="box-icon">
                        <i className="fa-hashtag fa-solid fs-40 mb-4 text-warning" />
                      </div>
                      <h4>Social media</h4>
                      <p className="fs-15">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </p>
                      {/* Start Social Link */}
                      <div className="d-flex gap-3 justify-content-center social-links text-md-right">
                        <a
                          href="#"
                          className="fb d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="#"
                          className="tw d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="#"
                          className="ins d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                        <a
                          href="#"
                          className="pr d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                        >
                          <i className="fab fa-pinterest-p" />
                        </a>
                        <a
                          href="#"
                          className="li d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                      {/* /.End Social Link */}
                    </div>
                  </div>
                  {/* /.End Card */}
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 position-relative">
            <div className="container position-relative py-4 z-1">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-5">
                    {/* Start Section Header title */}
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                      Let us hear from you{" "}
                      <span className="underline position-relative text-primary">
                        directly!
                      </span>
                    </h2>
                    {/* /.End Section Header Title */}
                    {/* Start Section Header Sub Title */}
                    <div className="sub-title fs-16">
                      For more information about our services, get in touch with
                      our expert consultants. We're always eager to hear from you!
                    </div>
                    {/* /.End Section Header Sub Title */}
                  </div>
                  {/*/. End Section Header */}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10">
                  <div className="row align-items-center">
                    <div className="col-md-7 pe-xl-5 mb-5 mb-md-0">
                      {/* Start Illustration Image */}
                      <img
                        src="assets/keyon_img/contact.webp"
                        alt=""
                        className="img-fluid"
                      />
                      {/* /.End Illustration Image */}
                    </div>
                    <div className="col-md-5">
                      <form>
                        {/* Start Form Group */}
                        <div className="form-group mb-4">
                          <label className="required">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        {/* /.End Form Group */}
                        {/* Start Form Group */}
                        <div className="form-group mb-4">
                          <label className="required">Your Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="hello@email.com"
                            required=""
                          />
                        </div>
                        {/* /.End Form Group */}
                        {/* Start Form Group */}
                        <div className="form-group mb-4">
                          <label className="required">Your Phone</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                          />
                        </div>
                        {/* /.End Form Group */}
                        {/* Start Form Group */}
                        <div className="form-group mb-4">
                          <label className="required">Your Comments</label>
                          <textarea
                            className="form-control"
                            rows={5}
                            placeholder="Tell us what we can help you with!"
                            defaultValue={""}
                          />
                        </div>
                        <small className="text-muted">
                          For more information about our services, get in touch
                          with our expert consultants. We're always eager to hear
                          from you!
                        </small>
                        {/* /.End Form Group */}
                        {/* Start Submit Button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                        >
                          <span>Send message</span>
                          <span className="vr" />
                          <i className="fa-arrow-right fa-solid fs-14" />
                        </button>
                        {/* /.End Submit Button */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.End of about section */}
        </div>
        {/* /. End Main Content */}
      </Layout>
    )
}
export default ContactUs;