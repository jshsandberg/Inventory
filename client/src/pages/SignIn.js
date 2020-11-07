import React from "react";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn/index";
import WelcomeNavBar from "../components/WelcomeNavBar";

function SignInPage() {
  return(
    <>
      <WelcomeNavBar />
      <SignIn />
      <Footer />
    </>
  );
}

export default SignInPage;