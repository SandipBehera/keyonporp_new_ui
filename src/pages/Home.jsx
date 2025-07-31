import React, { useEffect, useState } from 'react';
import FeaturesProperties from '../components/feature_property';
import Layout from '../components/layout';
import { fetchBuilderLogo, fetchFeatureData, trackVisitor } from '../fetch_logic/fetch_property_data';
import BuilderLogoCarosel from '../components/builderLogo';
import '../components/css/homepage.css'
import PropertyCarousel from '../components/property-corousel';

export default function Home() {
  const [featurePropertyData, setFeaturePropertyData] = useState([]);
  const [builderList, setBuilderList] = useState([]);

  
  async function fetchBuilderList() {
    // Fetching the builder logo data
    await trackVisitor('home');
    const data = await fetchBuilderLogo();
    setBuilderList(data);
  }
  useEffect(() => {
    fetchBuilderList();
  }, []);

  return (
    <Layout>
      {/* Start Hero Header Two */}
      <div className="desktop-show align-items-center hero-header hero-header__two overflow-hidden position-relative ">
        <img
          src="assets/img/png-img/section-bg.png"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0"
        />
        {/* Start Oblique */}
        <div className="h-100 oblique overflow-hidden position-absolute top-0">
          <img
            src="assets/keyon_img/property_img/banner.webp"
            alt=""
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
          />
        </div>
        {/* /.End Oblique */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 col-xl-8">
              {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
              <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                Welcome To KeyonProperties
              </div>
              <h1 className="hero-header_title fw-bold mb-5 display-3">
                Find your{' '}
                <span className="underline position-relative text-primary">
                  dream
                </span>{' '}
                home
                <br className="d-none d-md-block" /> in the best location
              </h1>
              {/* Start Main Search Content */}
              {/* <Dropdown /> */}
              {/* /.End Main Search Content */}
            </div>
          </div>
          <div className="align-items-center g-xl-5 gx-3 gy-3 row mt-3 mobile-hide">
            <div className="col-auto">
              <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                <div className="work-icon me-3">
                  <i className="fas fa-map-marker-alt fs-33 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="fs-17 fw-semibold mb-0 work-title">
                    Search location
                  </h5>
                  {/* <div class="work-sub_title text-muted">Lorem Ipsum is simply</div> */}
                </div>
              </div>
            </div>
            <div className="col-auto fs-18 p-0 text-primary">
              <i className="fa-solid fa-chevron-right" />
            </div>
            {/*/.work-col*/}
            <div className="col-auto">
              <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                <div className="work-icon me-3">
                  <i className="fas fa-calendar-alt fs-28 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="fs-17 fw-semibold mb-0 work-title">
                    Make an appointment
                  </h5>
                  {/* <div class="work-sub_title text-muted">It is a long established fact</div> */}
                </div>
              </div>
            </div>
            <div className="col-auto fs-18 p-0 text-primary">
              <i className="fa-solid fa-chevron-right" />
            </div>
            {/*/.work-col*/}
            <div className="col-auto">
              <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                <div className="work-icon me-3">
                  <i className="fas fa-igloo fs-30 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="fs-17 fw-semibold mb-0 work-title">
                    Get your dream house
                  </h5>
                  {/* <div class="work-sub_title text-muted">There are many variations</div> */}
                </div>
              </div>
            </div>
            {/*/.work-col*/}
          </div>
        </div>
      </div>
      <div className="mobile-banner align-items-center hero-header hero-header__two overflow-hidden position-relative ">
      <div className="h-100  overflow-hidden  top-0">
          <img
            src="assets/keyon_img/mobile_banner.jpeg"
            alt=""
            className="h-100 object-fit-cover  w-100  top-0"
          />
        </div>
      </div>
      {/* /.End Hero Header Two */}
      <div className="angled bg-white py-5 wrapper lower-start">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  What Can We Help You Find?{' '}
                </h2>
                {/* /.End Section Header Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 d-flex">
              <div
                className="bg-primary p-4 p-lg-5 rounded-3 w-100 flex-fill align-content-center"
                style={{ alignItems: 'center', textAlign: 'center' }}
              >
                <img
                  src="assets/keyon_img/property_img/icon/build.png"
                  alt=""
                  style={{
                    width: '20vh',
                    alignItems: 'center',
                    alignContent: 'center',
                  }}
                />
                <a href="/properties">
                <h2 className="text-white hover">Residential</h2>
                <p className="text-white fs-16">
                  “At Keyon we curate the best 2 & 3 BHK flats to satisfy your
                  need”
                </p>
                </a>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div
                className="bg-primary p-4 p-lg-5 rounded-3 w-100 flex-fill align-content-center"
                style={{ alignItems: 'center', textAlign: 'center' }}
              >
                <img
                  src="assets/keyon_img/property_img/icon/vill.png"
                  alt=""
                  style={{
                    width: '20vh',
                    alignItems: 'center',
                    alignContent: 'center',
                  }}
                />
                 <a href="#">
                <h2 className="text-white hover align-items-center">
                  Commercial
                </h2>
                <p className="text-white fs-16 align-items-center">
                  “Make your dream come true by choosing the best lands to stay”
                </p>
                </a>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div
                className="bg-primary p-4 p-lg-5 rounded-3 w-100 flex-fill align-content-center"
                style={{ alignItems: 'center', textAlign: 'center' }}
              >
                <img
                  src="assets/keyon_img/rda.png"
                  alt=""
                  style={{
                    width: '20vh',
                    alignItems: 'center',
                    alignContent: 'center',
                    borderRadius: '50%',
                  }}
                />
                <a href='#'>
                <h2 className="text-white hover">
                  RDA
                  <br />
                  <span style={{ fontSize: '24px' }}>
                    (Real-Estate Digital Agency)
                  </span>
                </h2>
                <p className="text-white fs-16">
                  “Explore innovative approaches for strategic brand planning
                  and engaging with the target audience”
                </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Start Features Properties */}
      <FeaturesProperties />
      {/* /. End Features Properties */}
      {/* Start Articles Section */}
      <div className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Whom We Work For
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                {/* <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  100+ Developers{' '}
                  <span className="underline position-relative text-primary">
                    Under One Roof
                  </span>
                </h2> */}
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Experience the convenience and efficiency of having the prime
                  developers under one roof.{' '}
                  <br className="d-none d-lg-block" /> Our real estate
                  development hub brings together top industry professionals to
                  create exceptional living and commercial spaces.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <BuilderLogoCarosel builderData={builderList}/>
        </div>
      </div>

      {/* /. End Articles Section */}
      {/* Start Newslatter */}
      <div className="bg-primary newslatter position-relative py-5 mx-3 mx-xl-5 rounded-4 position-relative overflow-hidden">
        <div className="container p-4 position-relative z-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Our Latest Articles
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                  Want to join us?
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16 text-white">
                  Are you intrigued by the ever-evolving world of real estate?
                  Stay ahead of the curve by subscribing to our newsletter,
                  where the future of properties unfolds.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="row g-4 align-items-end newslatter-form">
                <div className="col-sm">
                  {/* Start Form Group */}
                  <div className="form-group">
                    <label className="text-white bg-primary fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-transparent"
                    />
                  </div>
                  {/* /. End Form Group */}
                </div>
                <div className="col-sm">
                  {/* Start Form Group */}
                  <div className="form-group">
                    <label className="text-white bg-primary">Enter Email</label>
                    <input
                      type="email"
                      className="form-control bg-transparent"
                    />
                  </div>
                  {/* /. End Form Group */}
                </div>
                <div className="col-sm-auto">
                  {/* Start Button */}
                  <button type="button" className="btn btn-lg btn-light w-100">
                    Join Now
                  </button>
                  {/* /. End Button */}
                </div>
              </div>
              {/* Start Text */}
              <div className="text-center text-white mt-3">
                By subscribing to our newsletter, you agree to our terms and
                conditions.
              </div>
              {/* /. End Text */}
            </div>
          </div>
        </div>
      </div>
      {/* /.End Newslatter */}
    </Layout>
  );
}
