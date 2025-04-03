import React from "react";
import "../styles/discoverSection.css";
import { GiArtificialIntelligence, GiProgression } from "react-icons/gi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import splashBear from "../assets/images/logos/Splash-bear.png";

const DiscoverSection = () => {
  return (
    <section className="discoverSection">
      <div className="container">
        <div className="row ">
          {/* Left Side - Content */}
          <div className="col-md-9">
            <div className="content">
              <h2 className="headline">
                <span className="highlight">Discover</span> Browzly
              </h2>
              <p className="subheading">
                Award-winning EdTech innovation for AI-powered Systematic
                Synthetic Phonics practice and formative assessment
              </p>
              <p className="description">
                Browzly Ltd is a London-based education technology company
                providing AI-powered phonics practice and formative phonics
                assessment tools to support structured synthetic phonics
                instruction. Our Science of Reading-aligned unique methodology
                helps improve phonics outcomes, ensuring students develop
                independent reading routines towards decoding and fluency
                mastery.
              </p>
              <div className="features">
                <FeatureCard
                  icon={<GiArtificialIntelligence />}
                  text="AI-powered & phonics scheme-agnostic"
                />
                <FeatureCard
                  icon={<GiProgression />}
                  text="Science of Reading aligned"
                />
                <FeatureCard
                  icon={<BsFillPersonLinesFill />}
                  text="Best-in-class phonics teacher training CPD"
                />
              </div>
              <div className="get-in-touch">
                <h3>
                  Get in touch today to see how Browzly can impact phonics
                  outcomes in your school.
                </h3>
                <a href="/contact" className="cta-button">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Bear Image */}
          <div className="col-md-3 text-center hide-mobile">
            <img src={splashBear} alt="Browzly Bear" className="splash-bear" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, text }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default DiscoverSection;
