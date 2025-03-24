import React from "react";
import Header from "../components/header";  // Ensure Header is imported
import DiscoverSection from "../components/discoverSection";  // Import your section
import OurGuidingLight from "../components/OurGuidingLight";

function HomePage() {
  return (
    <div>
      <Header />  {/* Keep the header visible */}
      <DiscoverSection />
      <OurGuidingLight />
      {/* Add other sections here later */}
    </div>
  );
}

export default HomePage;
