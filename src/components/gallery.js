import React, { useEffect, useMemo, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from 'react-owl-carousel';
import { fetchFeatureData } from "../fetch_logic/fetch_property_data";

// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }


const Gallery = ({propData}) => {
  useEffect(() => {
      // Initialize Magnific Popup on your gallery
      if (typeof window !== "undefined") {
        const $ = require("jquery");
        require("magnific-popup");
        $(".grid-images-item-wrap").magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
        $(".popup-youtube").magnificPopup({
          type: "iframe",
        });
        $("#browse-gallery-link").on("click", function () {
          $(".grid-images-item-wrap").magnificPopup("open");
        });
      }
    }, []);
    return (
      <>
        {/* Start Masonry */}
         <div className="container py-4">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-5">
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                Property{" "}
                <span className="underline position-relative text-primary">
                  Gallery{" "}
                </span>{" "}
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              {/* <div className="sub-title fs-16">
                Our guests always travel the world in style. Mention @Kempinski
                <br className="d-none d-lg-block" /> on Instagram for a chance
                to be featured!
              </div> */}
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="position-relative">
          {/* Start Header Masonry */}
          <div className="header-masonry header-masonry_full position-relative">
              <div className="row">
                {propData?.map((image, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <a
                  href={`../${image?.src}`}
                  className="grid-images-item-wrap overflow-hidden position-relative w-100 box-ratio-2-3 d-block"
                >
                  {/* Masonry Image */}
                  <img
                    src={`../${image?.src}`}
                    alt=""
                    className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
                  />
                </a>
                </div>
                ))}
            </div>
          </div>
        </div>
        </div>
      </>
    );
};
export default Gallery;
