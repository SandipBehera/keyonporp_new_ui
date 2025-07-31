import React, { useEffect } from "react";
import "magnific-popup/dist/magnific-popup.css";
import $ from "jquery"; // Ensure jQuery is imported
import { img_url } from "../creds";


function PopUpImageGalleryTwo({ galleryData }) {
  useEffect(() => {
    // Initialize Magnific Popup on your gallery
    $(".galary-overlay-hover").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    $("#browse-gallery-link-two").on("click", function () {
      $(".galary-overlay-hover").magnificPopup("open");
    });
  }, []);

  return (
    <div className="py-4">
      <div className="container">
        <div className="align-items-end row g-4 mb-5">
          <div className="col">
            {/* Start Section Header Title */}
            <div className="section-header text-center text-xl-start">
              {/* Start Subtitle */}
              <div className="bg-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                Property Gallery
              </div>
              {/* /. End Subtitle */}
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                See Our Property{" "}
                <span className="underline position-relative text-primary">
                  Gallery
                </span>
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16 text-white">
                Our guests always travel the world in style.
              </div>
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
          <div className="col-12 col-xl-auto text-center text-xl-end">
            {/* Start Button */}
            <a
              href="#"
              id="browse-gallery-link-two"
              className="btn btn-primary btn-lg d-inline-flex hstack gap-2 btn-gallery"
            >
              <span>Browse Gallery</span>
              <span className="vr" />
              <i className="fa-arrow-right fa-solid fs-14" />
            </a>
            {/* /.End Button */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          id="gallery-1"
          className="align-items-center g-4 justify-content-center row zoom-gallery"
        >
          {galleryData?.prop_images?.map((image, index) => (
            <>
              <div className="col-6 col-sm-4 col-lg-3 col-xxl-2" key={index}>
                {/* Galary Item */}
                <a
                  href={`../${image.src}`}
                  className="d-block galary-overlay-hover position-relative"
                >
                  <img
                    src={`../${image.src}`}
                    alt=""
                    className="img-fluid rounded-3"
                  />
                  <div className="galary-hover-element w-100 h-100">
                    <i className="fa-solid fa-expand text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1" />
                  </div>
                </a>
                {/* /. End galary Item */}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopUpImageGalleryTwo;
