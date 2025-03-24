import React from "react";
import Header from "../components/header";  // Ensure Header is imported
import DiscoverSection from "../components/discoverSection";  // Import your section

function HomePage() {
  return (
    <div>
      <Header />  {/* Keep the header visible */}
      <DiscoverSection />
      {/* Add other sections here later */}
    </div>
  );
}

export default HomePage;
