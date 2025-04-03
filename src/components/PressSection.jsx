import React, { useRef } from "react";
import "../styles/pressSection.css";
import BrowzlyBetWinner from "../assets/images/BrowzlyBetWinner.png";
import gamifyLearning from "../assets/images/gamifyLearning.png";
import BrowzlyToSchool from "../assets/images/BrowzlyToSchool.png";
import ClassroomAids from "../assets/images/ClassroomAids.png"
const PressSection = () => {
  const scrollRef = useRef(null);

  const pressData = [
    {
      id: 1,
      title: "Should we gamify our teaching and learning?",
      image: gamifyLearning,
      link: "https://medium.com/educate-ventures/incentivising-learners-should-we-gamify-our-teaching-and-learning-1310e8727494",
    },
    {
      id: 2,
      title: "Browzly now goes to schools",
      image: BrowzlyToSchool,
      link: "https://gulfnews.com/uae/browzly-now-goes-to-schools-1.2243142",
    },
    {
      id: 3,
      title: "Browzly - BET 2020 WINNER APP!",
      image: BrowzlyBetWinner,
      link: "https://www.openpr.com/news/1914991/browzly-bett-2020-winner-app",
    },
    {
        id : 4,
        title: "CLASSROOM AIDS FOR LEARNING, TEACHING AND ASSESSMENT",
        image: ClassroomAids,
        link: "https://bettawards.com/2019/11/classroom-aids-for-learning-teaching-and-assessment"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="press-section">
      <h2 className="section-title">Press</h2>
      <div className="press-container">
        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>
        <div className="press-wrapper" ref={scrollRef}>
          {pressData.map((press) => (
            <div key={press.id} className="press-card">
              <img src={press.image} alt={press.title} className="press-img" />
              <a href={press.link} target="_blank" rel="noopener noreferrer" className="press-title">
                {press.title}
              </a>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>›</button>
      </div>
    </section>
  );
};

export default PressSection;

