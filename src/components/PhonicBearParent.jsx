import React from "react";
import "../styles/PhonicBearParent.css";
import BearImage from "../assets/images/BearImage.png"; // Update with actual image path

const PhonicsBearParent = () => {
  return (
    <section className="PhonicsBearParent">
      <div className="container">
        <div className="row">
          {/* Left Side Content */}
          <div className="col-md-9">
            <div className="content">
              <h2 className="headline">Browzly Phonic Bear for Parents - <span className="coming-soon">Coming Soon</span></h2>
              <p className="subheading">
                Help Your Child Become a Confident Reader with AI-Powered Phonics Practice at Home!
              </p>
              <p className="description">
                Browzly, the AI-powered phonics practice tool trusted by schools, is soon coming to parents! Give your child fun, interactive, Science of Reading evidence-based Phonics practice at home and see their reading accuracy, fluency, and spelling improve.
              </p>

              {/* Features List Card */}
              <div className="features-card">
                <ul>
                  <li>FREE Baseline Reading Report</li>
                  <li>Boost reading fluency, spelling skills, and independent practice</li>
                  <li>Personalized AI support for reading progress</li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="cta-section">
                <a href="#" className="cta-button">Sign up for early access!</a>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-md-3 image-container">
            <img src={BearImage} alt="Phonics Bear" className="baseline-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhonicsBearParent;
