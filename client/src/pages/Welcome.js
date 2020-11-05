import React from "react";
import WelcomeNavBar from "../components/WelcomeNavBar";
import WelcomeHero from "../components/WelcomeHero";
import WelcomeIntro from "../components/WelcomeIntro";
import WelcomeTitle from "../components/WelcomeTitle";
import WelcomeFeatures from "../components/WelcomeFeatures";

function WelcomePage() {
  return(
    <>
        <WelcomeNavBar />
        <WelcomeHero />
        <WelcomeIntro />
        <WelcomeTitle />
        <WelcomeFeatures />
    </>
  );
}

export default WelcomePage;