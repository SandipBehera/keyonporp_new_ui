// Desc: This component is used to display the builder logo in the carousel.
import { useEffect, useMemo, useRef, useState } from 'react';
import './css/builderLogo.css';

const BuilderLogoCarosel = ({builderData}) => {
  const [data, setData] = useState([]);
  useMemo(() => setData(builderData), [builderData]);

  const slideTrackRef = useRef(null);

  useEffect(() => {
    const slideTrack = slideTrackRef.current;
    const slides = Array.from(slideTrack.children);

   // Clone the first set of slides to the end
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      slideTrack.appendChild(clone);
    });

  }, []);
  
  return (
    <div className="slider">
    <div className="slide-track" ref={slideTrackRef}>

      {data ? (
        data.concat(data)?.map((image, index) => (
          <div className="slide" key={image.id}>
            <img src={image.builder_logo} alt={`Logo ${image.builder_name}`} />
          </div>

        ))
      ) : (
        <p>No Builder Logo found</p>
      )}

      {/* /.End Grid Post */}
    </div>
    </div>
  );
};
export default BuilderLogoCarosel;
