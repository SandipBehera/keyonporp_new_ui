import React, { useRef, useState } from 'react';
import StickyBox from 'react-sticky-box';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import FloorPlanCarosel from './floor-plan-corousel';
import { useForm } from 'react-hook-form';
import { save_leads } from '../creds';
const PropertySticky = ({ data }) => {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    project_description,
    location,
    project_name,
    apartmentTypes,
    buildingDetails,
    areaSize,
    amenities,
    project_location,
    money,
    gallery,
   } = data;
  const datePickerRef1 = useRef(null);
  const datePickerRef2 = useRef(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleIconClick1 = () => {
    if (datePickerRef1.current) {
      datePickerRef1.current.setOpen(true);
    }
  };

  const handleIconClick2 = () => {
    if (datePickerRef2.current) {
      datePickerRef2.current.setOpen(true);
    }
  };
  const onSubmit = async(data) => {
    const postData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      projectName: project_name
    }
    const response = await fetch(save_leads,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    const resData = await response.json();
    if(response.ok){
      alert(resData.message);
    }
    else{
      alert('Something went wrong');
    }
  };
  return (
    <div className="h-details_content py-5">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-8 pe-xxl-5">
            <div className="cs-content">
              <div className="mb-5 border-bottom pb-5">
                <div className="fs-16 mb-1">
                  <i className="fa-solid fa-location-dot me-1" />
                  {location}
                </div>
                <h2 className="mt-0">{project_name}</h2>
                {/* Start Card Property Facilities */}
                <div className="card-property-facilities gap-2 hstack mt-auto pt-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>{apartmentTypes}</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-building text-dark me-1" />
                    <span>{buildingDetails}</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>{areaSize}</span>
                  </div>
                </div>
                {/* /. End Card Property Facilities */}
              </div>
              <div className="mb-5 border-bottom pb-5">
                {/* Start Title */}
                <h4 className="fw-semibold mb-4 text-capitalize">
                  About the{' '}
                  <span className="underline position-relative text-primary">
                    {' '}
                    property
                  </span>
                </h4>
                {/* End Title */}
                {/* Start Description */}
                {project_description?.map((desc, index) => (
                  <p key={index}>{desc.description}</p>
                ))}
              </div>
              {/* Start Amenities Content */}
              <div className="mb-5 border-bottom pb-5">
                {/* Start Title */}
                <h4 className="fw-semibold mb-4 text-capitalize">
                  Amenities{' '}
                  <span className="underline position-relative text-primary">
                    available
                  </span>
                </h4>
                {/* End Title */}
                <div className="row g-4">
                  {amenities?.amenities?.map((amenity, index) => (
                    <>
                      <div className="col-auto col-lg-3" key={index}>
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className={`fa-solid ${amenity.src} fs-18`} />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            {amenity.title}
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              {/* /.End Amenities Content */}
              {/* Start Floor Plans */}
              <div className="mb-5 border-bottom pb-5">
                {/* Start Title */}
                <h4 className="fw-semibold mb-4 text-capitalize">
                  Master{' '}
                  <span className="underline position-relative text-primary">
                    Plans
                  </span>
                </h4>
                {/* /.End Title */}
                {/* Start Image */}
                <FloorPlanCarosel
                  galleryData={gallery?.master_plan}
                  key={gallery?.master_plan ? 'loaded' : 'loading'}
                />
                {/* /.End Image */}
              </div>
              {/* /.End Floor Plans */}
              {/* Start Floor Plans */}
              <div className="mb-5 border-bottom pb-5">
                {/* Start Title */}
                <h4 className="fw-semibold mb-4 text-capitalize">
                  Floor{' '}
                  <span className="underline position-relative text-primary">
                    Plans
                  </span>
                </h4>
                {/* /.End Title */}
                {/* Start Image */}
                <FloorPlanCarosel
                  galleryData={gallery?.floor_plan}
                  key={gallery?.floor_plan ? 'loaded' : 'loading'}
                />
                {/* /.End Image */}
              </div>
              {/* /.End Floor Plans */}

              {/* Start Map */}
              <div>
                {/* Start Title */}
                <h4 className="fw-semibold mb-4 text-capitalize">
                  <span className="underline position-relative text-primary">
                    Location
                  </span>
                </h4>
                {/* End Title */}
                {/* Start Map */}
                <div className="rounded-4 overflow-hidden">
                  {/* <GooglePropertyDetailsMapsComponent /> */}
                  <iframe
                    src={project_location?.location}
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* /.End Map */}
              </div>
              {/* /. End Map */}
            </div>
          </div>
          {/* Start Sidebar */}
          <div className="col-lg-4">
            <StickyBox>
              <div className="appointment-form p-3 p-lg-4 p-xl-5 rounded-4 shadow">
                <h2 className="fw-bold">
                  {money}
                  <b style={{ color: 'red' }}>*</b>onwards
                </h2>
                {/* Start Tabs Nav */}
                <ul className="nav nav-tabs mb-5" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link ms-0 active"
                      id="tab-one"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-one-pane"
                      type="button"
                      role="tab"
                      aria-controls="tab-one-pane"
                      aria-selected="true"
                    >
                      Schedule a Tour
                    </button>
                  </li>
                </ul>
                {/* /.End Tabs Nav */}
                {/* Start Tab Content */}
                <div className="tab-content">
                  {/* Start Tab Pane */}
                  <div
                    className="tab-pane fade show active"
                    id="tab-one-pane"
                    role="tabpanel"
                    aria-labelledby="tab-one"
                    tabIndex={0}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row g-4">
                        <div className="col-sm-12">
                          <div className="form-group has-icon">
                            <label className="required fw-semibold required text-dark">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Full Name"
                              {...register('name', { required: true })}
                            />
                            {/* errors will return when field validation fails  */}
                            {errors.name && (
                              <span>This field is required</span>
                            )}
                            <i className="fa-solid fa-user form-icon fs-16 position-absolute top-50" />
                          </div>
                          {/* Start Search Input With Icon */}
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group has-icon">
                            <label className="required fw-semibold required text-dark">
                              Phone Number
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Phone Number"
                              {...register('phone', { required: true })}
                            />
                            <i className="fa-solid fa-mobile-button form-icon fs-16 position-absolute top-50" />
                            {errors.phone && (<span>This Field is required</span>)}
                          </div>
                          {/* End Search Input With Icon */}
                        </div>
                        <div className="col-sm-12">
                          {/* Start Search Input With Icon */}
                          <div className="form-group has-icon">
                            <label className="required fw-semibold required text-dark">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Your Email"
                              {...register('email', { required: true })}
                            />
                            <i className="fa-solid fa-envelope form-icon fs-16 position-absolute top-50" />
                            {errors.email && (<span>This Field is required</span>)}
                          </div>
                          {/* End Search Input With Icon */}
                        </div>
                        <div className="col-sm-12">
                          {/* Start Button */}
                          <button
                            className="btn btn-primary btn-lg w-100"
                            type="submit"
                          >
                            Book Now
                          </button>
                          {/* /.End Button */}
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* /.End Tab Pane */}
                </div>
                {/* /.End Tab Content */}
              </div>
            </StickyBox>
          </div>
          {/* /. End Sidebar */}
        </div>
      </div>
    </div>
  );
};

export default PropertySticky;
