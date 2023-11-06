import React, { useEffect } from "react";
import "./Reviews.css";

import { AiFillStar } from "react-icons/ai";

import Image1 from "../../Assets/image13.png";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {


  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (

    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos= 'fade-up'>FROM OUR CLIENTS</span>
          <h3 data-aos= 'fade-up'>Real Travel History From Our Beloved Clients</h3>
          <p data-aos= 'fade-up'>
            By choosing us as their tour agency, cistomer can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>

          <span className="stars flex" data-aos= 'fade-up'>
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientImages flex">
            <img src={Image1} alt="Client Image" data-aos= 'fade-up'/>
            <img src={Image1} alt="Client Image" data-aos= 'fade-up'/>
            <img src={Image1} alt="Client Image" data-aos= 'fade-up'/>
            <img src={Image1} alt="Client Image" data-aos= 'fade-up'/>
            
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image1} alt="Div image" data-aos= 'fade-down' />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
