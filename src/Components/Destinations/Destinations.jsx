import React, { useEffect } from "react";
import "./Destinations.css";

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import image1 from "../../Assets/image11.png";
import image2 from "../../Assets/image9.png";
import image3 from "../../Assets/image12.png";
import image4 from "../../Assets/image.png";
import image5 from "../../Assets/image5.png";
import image6 from "../../Assets/image6.png";
import image7 from "../../Assets/image7.png";
import image8 from "../../Assets/image13.png";

import Aos from 'aos';
import 'aos/dist/aos.css';

const destinations = [
  {
    id: 1,
    img: image1,
    name: "Dayara Bugyal",
    location: "Uttarkashi",
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: "Tapovan",
    location: "Uttarkashi",
    rating: 4.8,
  },
  {
    id: 3,
    img: image3,
    name: "Kalindi Pass",
    location: "Uttarkashi",
    rating: 4.8,
  },
  {
    id: 4,
    img: image4,
    name: "Bhagirathi III",
    location: "Uttarkashi",
    rating: 4.7,
  },
  {
    id: 5,
    img: image5,
    name: "Kyarkoti Trek",
    location: "Uttarkashi",
    rating: 4.8,
  },
  {
    id: 6,
    img: image6,
    name: "Thale Sagar",
    location: "Uttarkashi",
    rating: 4.9,
  },
  {
    id: 7,
    img: image7,
    name: "Gidara Bugyal",
    location: "Uttarkashi",
    rating: 4.8,
  },
  {
    id: 8,
    img: image8,
    name: "Sath Tal",
    location: "Uttarkashi",
    rating: 4.9,
  },
];

const Destinations = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos= 'fade-up'>EXPLORE NOW</span>
          <h3 data-aos= 'fade-up'>Find Your Dream Destination</h3>
          <p data-aos= 'fade-up'>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>
          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>
        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li className="active">Recommended</li>
            <li className="active">Beach</li>
            <li className="active">Park</li>
            <li className="active">Nature</li>
            <li className="active">Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv">
                  <img src={destination.img} alt="Destination Image" />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
