import React, { useEffect } from "react";
import Layout from "../components/layout";
import { trackVisitor } from "../fetch_logic/fetch_property_data";


const AboutUs = () => {
  const visitor= async () => {
    await trackVisitor('about_us');
  }
  useEffect(() => {
    visitor();
  }
  , []);
    return(
        <Layout>
             <div className="main-content">
             <div className="border-bottom py-3">
            <div className="container">
              {/* Start Breadcrumbs */}
              <div className="row gy-2 gx-4 gx-md-5">
                <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                  About Us
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
                      About
                    </li>
                  </ol>
                </div>
              </div>
              {/* End Breadcrumbs */}
            </div>
          </div>
       {/* Start Agent Content */}
       <div className="py-5">
         <div className="container py-4">
            <p>
            Keyon companies is a conglomerate with expertise in real estate, interior designing and co working space. The company is fueled by most young and dynamic members who are creating new benchmarks in the business segments.
            </p>
            <p>We are a renowned brand in the market with a brand value working with the most iconic builders in the country.</p>
            <p>Keyon company is registered under RERA :A02400001347 Telangana.</p>
            </div>
            </div>
            </div>
        </Layout>
    )
}
export default AboutUs;