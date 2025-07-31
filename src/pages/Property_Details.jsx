// import Layout from "@/components/Layout";
// import PopUpImageGallery from "@/components/magnific-pop-up-gallery";
// import PropertySticky from "@/components/property-sticky";
// import Link from "next/link";
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/layout';
import PropertySticky from '../components/property-sticky';
import { useEffect, useMemo, useState } from 'react';
import { fetchPropertyDetailData } from '../fetch_logic/fetch_property_data';
import PopUpImageGalleryThree from '../components/magnetic-pop-up-properti-details-three';
import NearByProperty from '../components/near_by';
import PropertyCarousel from '../components/property-corousel';
import Gallery from '../components/gallery';

export default function PropertyDetails() {
  const { property_name } = useParams();
  const [propData, setPropData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await fetchPropertyDetailData(property_name);
        console.log('Fetched property data:', response);
        setPropData(response);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [property_name]);

  // 🌀 Show loading spinner
  if (loading) return <p>Loading property details...</p>;
  console.log('Property data:', propData);
  return (
    <Layout
      metaTitle={`${propData?.SEO?.title} : KeyonProperties | Hyderabad Leading Realestate Consultancy`}
      metaDescription={`${propData?.SEO?.description}`}
      metaKeywords={`${propData?.SEO?.keywords}`}
    >
      {/* Start Main Content */}
      <div className="main-content">
        <div className="breadcrumb-wrap border-0 py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <div className="col-auto">
                {/* Start Back To Search */}
                <a
                  href="/properties"
                  className="align-items-center d-flex fw-medium text-primary"
                >
                  <i className="fa-solid fa-chevron-left me-1" /> Back To Search
                </a>
                {/* /. End Back To Search */}
              </div>
              <h4 className="border-start col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                {propData?.project_name}
              </h4>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        {/* Start Masonry */}
        <div className="container">
          <PopUpImageGalleryThree galleryData={propData?.gallery} />
        </div>
        {/* /. End Masonry */}
        <PropertySticky data={propData} />
        {/*Related Articles*/}
        <Gallery propData={propData?.gallery?.prop_images} />

        <NearByProperty data={propData?.nearby_projects} />
      </div>
      {/* /. End Main Content */}
    </Layout>
  );
}
