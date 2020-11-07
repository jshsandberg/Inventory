import React from "react";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp/index";
import WelcomeNavBar from "../components/WelcomeNavBar";

function SignInPage() {
  return(
    <>
    <WelcomeNavBar />
    <SignUp />
    <Footer />
    </>
  );
}

export default SignInPage;