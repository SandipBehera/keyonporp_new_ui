import React, { useEffect, useMemo, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from 'react-owl-carousel';
import { fetchFeatureData } from "../fetch_logic/fetch_property_data";

// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }


const PropertyCarousel = () => {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
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

  const [propData, setPropData] = useState([]);
  async function fetchData() {
    const data = await fetchFeatureData();
    setPropData(data);
  }
  useMemo(() => { fetchData(); }, []);


  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {/* Start Grid Post */}
     { 
        propData?.map((property) => {
     
     return (
       <div className="post grid-post" data-aos="fade" data-aos-delay={300} key={property.id}>
         <div className="col-sm-12 col-lg-12 col-xl-12 d-flex" key={property.id}>
           <a
             href={`/property_details/${property.name.replace(/ /g, '_')}`}
             key={property.id}
           >
             {/* Start Card Property */}
             <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
               {/* Start Card Link */}

               {/* /. End Card Link */}
               {/* Start Property Image */}
               <div className="property-img card-image-hover overflow-hidden">
                 <img
                   src={`../${property.img} `}
                   alt={property.name}
                   className="img-fluid"
                 />
                 <div className="bg-white card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-dark top-1">
                   {property.status}
                 </div>
               </div>
               {/* /. End Property Image */}
               <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                 {/* Start Card Property Price */}

                 <h4 className="property-card-title mb-3">{property.name}</h4>
                 <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                   <h5 className="m-0 fw-bold text-primary">
                     {property.money}
                   </h5>
                   {/* <div> {property.day}</div> */}
                 </div>
                 {/* /. End Card Property Price */}

                 <div className="card-property-description mb-3">
                   {property.location}
                 </div>
                 {/* Start Card Property Facilities */}
                 <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                   <div className="">
                     <i className="fa-solid fa-bed text-dark me-1" />
                     <span>{property.bedroom}</span>
                   </div>
                   <span className="vr" />
                   <div className="">
                     <i className="fa-solid fa-building text-dark me-1" />
                     <span>{property.tower} </span>
                   </div>
                   <span className="vr" />
                   <div className="">
                     <i className="fa-solid fa-vector-square text-dark me-1" />
                     <span>{property.area} </span>
                   </div>
                 </div>
                 {/* /. End Card Property Facilities */}
               </div>
             </div>
           </a>
           {/* /. End Card Property */}
         </div>
       </div>
     );})
    }
    </OwlCarousel>
  );
};
export default PropertyCarousel;
