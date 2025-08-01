import React from "react";

export default function NotFound() {
  return (
    <>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Page Comming Soon
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
                    404 Page
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-9 col-lg-7 text-center">
                {/* Start Image */}
                <img
                  src="assets/img/png-img/page-not-found.png"
                  alt=""
                  className="img-fluid"
                />
                {/* /.End Image */}
                <div className="mt-5">
                  <h2 className="fw-semibold mb-3 text-capitalize">
                    Page not pound.
                  </h2>
                  <p className="fs-16">
                    The server encountered something unexpected that didn&apos;t
                    allow it to complete the request. We apologize. You can go
                    back to main page:
                  </p>
                  {/* Start Button */}
                  <a
                    href="/"
                    className="btn btn-primary btn-lg d-inline-flex hstack gap-2 mt-3"
                  >
                    <span>Go To Home Page</span>
                    <span className="vr" />
                    <i className="fa-arrow-right fa-solid fs-14" />
                  </a>
                  {/* /.End Button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}
    </>
  );
}
