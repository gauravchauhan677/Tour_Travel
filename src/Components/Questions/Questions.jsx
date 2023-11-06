import React, { useEffect, useState } from "react";
import "./Questions.css";

import Accordion from "./Accordion";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Questions = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  const [active, setActive] = useState(
    "How do I choose the right travel destination for me?"
  );

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos= 'fade-up'>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid" data-aos= 'fade-up'>
        <div className="accordion grid">
          <Accordion
          
            title="How do I choose the right travel destination for me?"
            desc=" Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destination that align with your preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
            data-aos= 'fade-up'
          />
          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="Research the climate, weather patterns, and peak tourist season of the destination you're interested in. Opt for the shoulder season when the weather is pleasant, and crowds are fewer, if possible."
            active={active}
            setActive={setActive}
            data-aos= 'fade-up'
          />
          <Accordion
            title="How can I find budget-friendly travel options and deals?"
            desc="Look for travel deals, discount on flights and accommodation, and consider using travel apps or websites that offer competetive prices. Being flexible with your travel dates can also help you find best deals"
            active={active}
            setActive={setActive}
            data-aos= 'fade-up'
          />
          <Accordion
            title="What essential items should I pack for my adventure?"
            desc="Park oppropriate clothing, toiletries, travel documents (passport, visa, etc.), essential medications, and any specific gear needed for your adventure (e.g., hiking boots, snorkeling gear)."
            active={active}
            setActive={setActive}
            data-aos= 'fade-up'
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos= 'fade-up'>Do you have any sppecific question?</h4>
            <p data-aos= 'fade-up'>
              Please fill the form below and our dedicated team will get in
              touch with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder="Enter email address" data-aos= 'fade-up' />
            <textarea placeholder="Enter your question here" data-aos= 'fade-up'></textarea>
            <button className="btn" data-aos= 'fade-up'>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
