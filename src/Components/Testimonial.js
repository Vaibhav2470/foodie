import React from "react";
import ProfilePic from "../Assets/vaibhav.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
         Aspiring web designer and developer. Motivated to collaborate with web developers around the world.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="img-v" src={ProfilePic} alt="" />
        <p>
          Hi, This is Vaibhav Singh
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Vaibhav Singh</h2>
      </div>
    </div>
  );
};

export default Testimonial;
