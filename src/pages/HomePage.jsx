import React from "react";
import Header from "../components/header";  // Ensure Header is imported
import DiscoverSection from "../components/discoverSection";  // Import your section
import OurGuidingLight from "../components/OurGuidingLight";
import ProductsAndServices from "../components/ProductsAndServices";
import PhonicsBaseline from "../components/PhonicsBaseline";
import PhonicsBearParent from "../components/PhonicBearParent";
import PressSection from "../components/PressSection";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div>
      <Header />  {/* Keep the header visible */}
      <DiscoverSection />
      <OurGuidingLight />
      <ProductsAndServices />
      <PhonicsBaseline />
      <PhonicsBearParent />
      <PressSection />
      <Footer />

      {/* Add other sections here later */}
    </div>
  );
}

export default HomePage;
