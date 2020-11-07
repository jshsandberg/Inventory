import React from "react";
import WelcomeNavBar from "../components/WelcomeNavBar";
import WelcomeHero from "../components/WelcomeHero";
import WelcomeIntro from "../components/WelcomeIntro";
import WelcomeFeatures from "../components/WelcomeFeatures";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

function WelcomePage() {
  return(
    <>
        <WelcomeNavBar />
        <WelcomeHero />
        <WelcomeIntro />
        <WelcomeFeatures />
        <Testimonials />
        <Footer />
    </>
  );
}

export default WelcomePage;