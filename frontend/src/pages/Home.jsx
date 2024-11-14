import React from "react";
import Hero from "../components/Hero";
import LatestCollectcion from "../components/LatestCollectcion";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollectcion/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  );
}

export default Home;
