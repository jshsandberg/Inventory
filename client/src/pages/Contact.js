import React from "react";
import Footer from "../components/Footer";
import WelcomeNavBar from "../components/WelcomeNavBar";
import JotformEmbed from 'react-jotform-embed';


class ContactPage extends React.Component {
  render (){
  return (
    <>
    <WelcomeNavBar />
    <JotformEmbed src="https://form.jotform.com/203186177330048" /> 
    <Footer style={{marginTop: "-55px"}} />
  </>
  );
}
}

export default ContactPage;