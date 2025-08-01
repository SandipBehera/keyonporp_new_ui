import React, { useState } from "react";
import Select from 'react-select'


function Dropdown() {
  const [value, setValue] = useState(null);
  const options = [{ value: "Hyderabad", label: "Hyderabad" }];
  const optionsTwo = [
    { value: "Offices", label: "Offices" },
    { value: "Apartment", label: "Apartment" },
    { value: "Houses", label: "Houses" },
  ];
  const optionsThree = [
    { value: "Rent", label: "Rent" },
    { value: "Sell", label: "Sell" },
  ];
  const customSelectStyle = {
    control: (provided) => ({
      ...provided,
      // Adjust the padding as needed
      minHeight: "68px", // Add min-height
      borderRadius: "0.5rem", // Add border-radius
      border: "0", // Add border
      boxShadow: "0px 0px 40px rgba(29, 58, 83, 0.1)", // Add box-shadow
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: "2.25rem", // Add padding-left
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0a73c0" : "white", // Change the background color when an option is selected
      color: state.isSelected ? "white" : "black", // Change the text color when an option is selected
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Hide the indicator separator
    }),
  };
  return (
    // Start form
    <form className="row g-2 main-search">
      <div className="col-md-7">
        {/* Start Select Field */}
        <div className="row g-2">
          <div className="col-md-4">
            <div className="search-select">
              <Select
                id="test"
                options={options}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                placeholder="Location"
                styles={customSelectStyle}
              />
              <i className="fa-solid fa-location-crosshairs search-icon" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-select">
              <Select
                options={optionsTwo}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                styles={customSelectStyle}
                placeholder="Property"
              />
              <i className="fa-solid fa-house fs-17 search-icon"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-select">
              <Select
                options={optionsThree}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                styles={customSelectStyle}
                placeholder="Rent"
              />
              <i className="fa-solid fa-sack-dollar fs-18 search-icon"></i>
            </div>
          </div>
        </div>
        {/* End Select Field */}
      </div>
      <div className="col-md-5">
        {/* Start Search Input */}
        <div className="search-input">
          <i className="fa-solid fa-magnifying-glass search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search For Properties ....."
          />
       <a
            href="properties-list"
            className="btn btn-primary search-btn position-absolute top-50"
          >
            <i className="fa-solid fa-angle-right" />
       </a>
        </div>
        {/* /.End Search Input */}
      </div>
    </form>
    // End Form
  );
}

export default Dropdown;
