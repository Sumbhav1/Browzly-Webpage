import React from "react";
import "../styles/phonicsBaseline.css";
import BaselineImage from "../assets/images/BaselineImage.png";

const PhonicsBaseline = () => {
  return (
    <section className="phonics-baseline">
      <div className="container">
        <div className="row align-items-center">
          {/* Left - Text Content */}
          <div className="col-md-8">
            <div className="content">
              <div className="phonicChecker">
                <h2 className="headline">Browzly AI-Powered Phonics Baseline Checker</h2>
                <p className="description">
                  Instantly assess Phonics skills & get accurate placement within your schools’ chosen Phonics Scheme.
                </p>
                <p className="description">
                  Browzly Phonics Baseline Checker is an AI-driven assessment tool that helps phonics teachers accurately evaluate students’ baseline phonics knowledge and decoding skills within a few minutes.
                </p>
                <ul className="features-list">
                  <li>✅ Instant, Accurate & Bias-Free baseline assessment</li>
                  <li>✅ Pupil placement recommendations within your Phonics Schemes</li>
                  <li>✅ Reading Age Checker – Get each child’s reading age in comparison to their peer group</li>
                </ul>
                <p className="description">
                  📢 Improve Baseline assessment accuracy, and get quick placement to save instruction time!
                </p>

                {/* Combined Feature Card */}
                <div className="row feature-cards">
                  <div className="col-12">
                    <div className="card combined-card">
                      <div className="card-body">
                        <h5 className="card-title">🔹 Instant & Bias-Free Placement</h5>
                        <h5 className="card-title">🔹 Science of Reading backed accuracy</h5>
                        <h5 className="card-title">🔹 AI-powered reading age analytics</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="/request-demo" className="cta-button">Request a Demo</a>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="col-md-4 text-center">
            <img src={BaselineImage} alt="Phonics Baseline Illustration" className="baseline-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhonicsBaseline;
