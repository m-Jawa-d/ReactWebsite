import React from "react";
import Common from './Common';
import Pic from "../src/Images/Alpha1.png";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Common Hed="Grow your business with"
        bton="Get Started"
        img={Pic}
        lik="/service"
      />
      <div className='fixed-bottom'>
        <Footer />
      </div>
    </>
  )
}
export default Home;