import React from "react";
import "../styles/ourGuidingLight.css";
import BSME from "../assets/images/BSME.jpg";
import childHeadphones from "../assets/images/childwithheadphones.jpg"

const OurGuidingLight = () => {
  return (
    <section className="our-guiding-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Section - Main Content */}
          <div className="col-md-7">
            <div className="content">
              <h2 className="headline">
                Our <span className="highlight">guiding light</span>
              </h2>
              <p className="description">
                We are committed to developing best-in-class education
                technology that seamlessly integrates proven, research-backed
                teaching methods. Our solutions empower teachers and parents to
                support learners across diverse literacy and linguistic
                backgrounds, fostering a love for reading, boosting literacy
                confidence, and enabling students to excel in their curriculum.
              </p>
              <div className="goals-card">
                <h3 className="subheadline">
                  Our Goals as Your Valued Partner
                </h3>
                <ul className="goals-list">
                  <li>
                    To understand and align with your school’s educational goals
                  </li>
                  <li>
                    To provide ongoing professional development and support
                    (CPD)
                  </li>
                  <li>
                    To encourage open feedback for improvement as per needs
                  </li>
                  <li>
                    To demonstrate measurable impact on student outcomes and
                    resources
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - BSME Image */}
          <div className="col-md-4 text-center hide-mobile">
            <img src={BSME} alt="BSME Partners" className="bsme" />
            <img src={childHeadphones} alt="" className="childwithheadphones" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGuidingLight;

