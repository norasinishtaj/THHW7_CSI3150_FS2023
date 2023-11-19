import React from "react";

import "../TravelBlog/travelBlog.css";

function TravelBlog(props) {
  return (
    <section className="blog-section">
      <span className="blog-header">{props.placeHeading}</span>
      <div className="blog-images">
        <img src={props.img} className="place-photo" alt="places to visit" />
        <img src={props.img2} className="place-photo" alt="places to visit" />
        <img src={props.img3} className="place-photo" alt="places to visit" />
      </div>
      <span className="blog-description">{props.placeDescription}</span>
    </section>
  );
}

export default TravelBlog;
