import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useMemo, useState } from "react";
import OwlCarousel from 'react-owl-carousel';

const FloorPlanCarosel = ({ galleryData }) => {
  
  const [data, setData] = useState([]);
  useMemo(() => setData(galleryData), [galleryData]);
  const options = {
    loop: data?.length > 3,
    margin: 20,
    nav: data?.length > 3,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {/* Start Grid Post */}

      {data ? (
        data?.map((image, index) => (
          <>
            <div
              className="post grid-post"
              data-aos="fade"
              data-aos-delay={300}
              key={index}
            >
              <div className="grid-post__thumb position-relative">
                <a
                  href={`../${image.src}`}
                  className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                >
                  <figure className="w-100 m-0">
                    <img
                      src={`../${image.src}`}
                      className="img-fluid w-100"
                      alt=""
                    />
                  </figure>
                  <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                    <div className="position-absolute text-center top-50 w-100">
                      <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                        Continue Reading
                        <i className="fa fa-angle-right text-white" />
                      </h4>
                    </div>
                  </div>
                </a>
                {/* /.image */}
              </div>
            </div>
          </>
        ))
      ) : (
        <p>No floor Plan found</p>
      )}

      {/* /.End Grid Post */}
    </OwlCarousel>
  );
};
export default FloorPlanCarosel;
