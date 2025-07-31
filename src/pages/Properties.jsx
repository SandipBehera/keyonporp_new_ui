import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/layout';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import NotFound from '../components/not-found';
import { fetchPropertyData, trackVisitor } from '../fetch_logic/fetch_property_data';

export default function PropertiesView() {
  const { id } = useParams();
  const [propData, setPropeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
   const visitor= async () => {
      await trackVisitor('properties');
    }
    useEffect(() => {
      visitor();
    }
    , []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPropertyData();
        setPropeData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPropeData(null);
      }
    };

    fetchData();
  }, [id]);

  useMemo(() => {
    if (!_.isEmpty(id)) {
      // Split the URL by underscores
      const urlParts = id.split('_');

      // Get the last part after the last underscore
      const lastValue = urlParts[urlParts.length - 1];
      // Find the property with the name that matches the last part
      const property = propData?.filter((property) =>
        property.location_keyword[0].includes(lastValue)
      );
      console.log(property);
      if (!_.isEmpty(property)) {
        setFilteredData(property);
      } else {
        setFilteredData(null);
      }
    }
    else {
      setFilteredData(propData);
    }
  }, [id, propData]);

  return (
    <Layout 
    metaTitle={"Properties : KeyonProperties | Hyderabad Leading Realestate Consultancy"}
        metaDescription={"KeyonProperties Consultans and agency in hyderabad one of the leading website in hyderabad with 30+ A1 projects KeyonProp.com"}
        metaKeywords={"KeyonProperties, KeyonProp, KeyonProp.com, KeyonProperties Consultans, KeyonProperties agency, KeyonProperties hyderabad, KeyonProperties leading website, KeyonProperties 30+ A1 projects"}
    >
      <div className="main-content">
        <div className="py-5">
          <div className="container py-4">
            <div className="section-header text-center text-xl-start mb-5">
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                Our{' '}
                <span className="underline position-relative text-primary">
                  Properties
                </span>{' '}
              </h2>
            </div>
            <div className="row g-4 justify-content-center">
              {filteredData || filteredData !== null ? (
                filteredData?.map((property) => {
                  return (
                    <div
                      className="col-sm-6 col-lg-4 col-xl-3 d-flex"
                      key={property.id}
                    >
                      <a
                        href={`/property_details/${property.name.replace(
                          / /g,
                          '_'
                        )}`}
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

                            <h4 className="property-card-title mb-3">
                              {property.name}
                            </h4>
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
                  );
                })
              ) : (
                <NotFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
