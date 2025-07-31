import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
export default function Layout({ children, metaTitle, metaDescription, metaKeywords }) {
  return (
    <div>
      <Helmet>
        <title>
          {metaTitle ||
            "KeyonProperties | Hyderabad Leading Realestate Consultancy"}
        </title>
        <meta
          name="description"
          content={
            metaDescription ||
            "KeyonProperties Consultans and agency in hyderabad one of the leading website in hyderabad with 30+ A1 projects KeyonProp.com"
          }
          />
          <meta name="keywords" content={metaKeywords || "KeyonProperties, KeyonProp, KeyonProp.com, KeyonProperties Consultans, KeyonProperties agency, KeyonProperties hyderabad, KeyonProperties leading website, KeyonProperties 30+ A1 projects"} />
        
        </Helmet>
        <Header />
        {children}
        <Footer />
      
    </div>
  );
}
