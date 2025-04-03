import React from "react";
import "../styles/ourProducts.css";
import PawSign from "../assets/images/PawSign.png"; // Fixed incorrect quotes

const ProductsAndServices = () => {
  return (
    <section className="products-and-services">
      <div className="container">
        <div className="row align-items-center">
          {/* Left - Text Content */}
          <div className="col-md-8">
            <div className="content">
              <div className="phonicBear">
                <h2 className="headline">Browzly Phonic Bear for Schools</h2>
                <p className="description">
                  Browzly Ltd. presents Browzly Phonic Bear – a BETT 2024 Awards
                  Finalist- An AI-Powered Ongoing Phonics Practice & Assessment
                  Tool.
                </p>
                <p className="description">
                  Browzly Phonic Bear is a Voice-AI powered phonics practice and
                  formative assessment tool aligned with the Science of Reading
                  evidence-based best practices. Designed to support Systematic
                  Synthetic Phonics (SSP) instruction in Early Years, KS1, and
                  EAL/ELL classrooms— it works with any SSP your school chooses.
                </p>
                <p className="description">
                  With AI-driven real-time feedback, automated phonics baseline
                  assessments, and advanced gap analysis class summary reports,
                  Browzly Phonic Bear saves weeks of teacher time while ensuring
                  every student receives personalized phonics support and
                  develops an independent reading routine.
                </p>
                <ul className="features-list">
                  <li>✅ Rapid Baseline assessments</li>
                  <li>✅ Sounds, words, and decodable texts</li>
                  <li>✅ In sync with your chosen SSP</li>
                  <li>✅ Accuracy, fluency & prosody</li>
                </ul>
                <p className="description">
                  Browzly Phonic Bear strengthens foundational literacy for
                  EYFS, KS1, and EAL/ELL learners, all while syncing with your
                  school’s chosen systematic synthetic phonics (SSP) programme
                  and instantly providing analytics on decoding accuracy,
                  fluency and prosody.
                </p>

                {/* Combined Feature Card */}
                <div className="row feature-cards">
                  <div className="col-12">
                    <div className="card combined-card">
                      <div className="card-body">
                        <h5 className="card-title">
                          🔹 Personalised bias-free analytics
                        </h5>
                        <h5 className="card-title">
                          🔹 Evidence-based & Science of Reading backed
                        </h5>
                        <h5 className="card-title">
                          🔹 AI that enhances human connection
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="col-md-4 text-center">
            <img src={PawSign} alt="Paw Sign" className="paw-sign-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;


