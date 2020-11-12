import React from "react";
import WelcomeNavBar from "../components/WelcomeNavBar";
import WelcomeHero from "../components/WelcomeHero";
import WelcomeIntro from "../components/WelcomeIntro";
import WelcomeFeatures from "../components/WelcomeFeatures";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import WelcomePromo from "../components/WelcomePromo";

function WelcomePage() {
  return(
    <>
        <WelcomeNavBar />
        <WelcomeHero />
        <WelcomeIntro />
        <WelcomeFeatures />
        <Testimonials />
        <WelcomePromo />
        <Footer />
    </>
  );
}

export default WelcomePage;