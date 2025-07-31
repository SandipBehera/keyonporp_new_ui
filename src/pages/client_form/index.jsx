import React from "react";
import { Last } from "react-bootstrap/esm/PageItem";
import Layout from "../../components/layout";


export default function ClientForm() {

    const [formData, setFormData] = React.useState({
        applicantName: "",
        email: "",
        phone: "",
        coApplicantName: "",
        coApplicantPhone: "",
        address: "",
        flatType: "",
        applicantPanCard: "",
        applicantAdharCard: "",
        chequeImage: "",
        message: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const form = new FormData();
        form.append("applicantName", formData.applicantName);
        form.append("email", formData.email);
        form.append("phone", formData.phone);
        form.append("coApplicantName", formData.coApplicantName);
        form.append("coApplicantPhone", formData.coApplicantPhone);
        form.append("address", formData.address);
        form.append("flatType", formData.flatType);
        form.append("applicantPanCard", formData.applicantPanCard);
        form.append("applicantAdharCard", formData.applicantAdharCard);
        form.append("message", formData.message);

        if (formData.chequeImage && formData.chequeImage.length > 0) {
            form.append("chequeImage", formData.chequeImage[0]);
        } else {
            console.error("Cheque image is not selected");
        }
        // Log FormData contents
        fetch("http://app.keyonprop.com/api/store_eoi", {
            method: "POST",
            body: form,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    alert("Form submitted successfully");
                } else {
                    alert("Form submission failed");
                }
            })
            .catch((err) => {
                console.error(err);
                alert("Form submission failed");
            });
    }
    return (
        <Layout>
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
          
          <div className="py-5 position-relative">
            <div className="container position-relative py-4 z-1">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-5">
                    {/* Start Section Header title */}
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                      Let book the property for you{" "}
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
                 
                   
                      <form className="container" encType="multipart/form-data">
                      <div className="row align-items-center">
                        {/* Start Form Group */}
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Applicant Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ApplicantName"
                            required
                            onChange={(e) => { setFormData({ ...formData, applicantName: e.target.value }) }}
                          />
                        </div>
                        {/* /.End Form Group */}
                        {/* Start Form Group */}
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Your Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                          />
                        </div>
                        {/* /.End Form Group */}
                        {/* Start Form Group */}
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Your Phone</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            required
                            onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }}
                          />
                        </div>
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Co-Applicant Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="CoApplicantName"
                            required
                            onChange={(e) => { setFormData({ ...formData, coApplicantName: e.target.value }) }}
                          />
                        </div>
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Co- Applicant Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ApplicantName"
                            required
                            onChange={(e) => { setFormData({ ...formData, coApplicantPhone: e.target.value }) }}
                          />
                        </div>
                        
                        {/* /.End Form Group */}
                        {/* Start Form Group */}
                        <div className="form-group mb-4">
                          <label className="required">Address</label>
                          <textarea
                            className="form-control"
                            rows={5}
                            defaultValue={""}
                            required
                            onChange={(e) => { setFormData({ ...formData, address: e.target.value }) }}
                          />
                        </div>
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Select The Flat type</label>
                         <select className="form-select" aria-label="Default select example"
                         onChange={(e) => { setFormData({ ...formData, flatType: e.target.value }) }}
                         required>
                            <option selected>Select The Flat type</option>
                            <option value="3 BHK 3000 Sqft">3 BHK 3000 Sqft</option>
                            <option value="4 BHK 4000 Sqft">4 BHK 4000 Sqft</option>
                            <option value="4 BHK 4000 Sqft">4 BHK 4500 Sqft</option>
                            </select>
                        </div>
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Applicant Pan Card</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                            onChange={(e) => { setFormData({ ...formData, applicantPanCard: e.target.value }) }}
                          />
                        </div>
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Applicant Adhar Card</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ApplicantName"
                            required
                            onChange={(e) => { setFormData({ ...formData, applicantAdharCard: e.target.value }) }}
                          />
                        </div>
                        <div className="col-sm-4 form-group mb-4">
                          <label className="required">Upload Cheque Image</label>
                          <input
                            type="file"
                            className="form-control"
                            style={{paddingTop:"1rem"}}
                            required
                            onChange={(e) => { setFormData({ ...formData, chequeImage: e.target.files }) }}
                          />
                        </div>
                        
                        <div className="form-group mb-4">
                          <label className="required">Message</label>
                          <textarea
                            className="form-control"
                            rows={5}
                            defaultValue={""}
                            onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }}
                          />
                        </div>
                        {/* /.End Form Group */}
                        {/* Start Submit Button */}
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                            onClick={handleSubmit}
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
        </Layout>
    );
    }
