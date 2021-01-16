import React from "react";
import Common from './Common';
import Footer from "./Footer";
import Pic from "../src/Images/Alpha2.png";
const About = () => {
  return (
    <>
      <div style={{ marginTop: "-23px" }}>
        <Common Hed="Welcome on about Page"
          bton="Contact Here"
          img={Pic}
          lik="/contact"
        />
      </div>
      <div className='posit text-center'>
        <Footer />
      </div>
    </>
  )
}
export default About;