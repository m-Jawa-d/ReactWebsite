import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Pic from "../src/Images/Pic2.png";
const Common = (props) => {
  return (
    <>
      <div className="container-fluid fo">
        <div className=" row ">
          <div className="col-10 mx-auto">
            <div className='row d-flex justify-content-center align-items-center marginofhome mt-5'>
              <div className='col-lg-6 cen mx-auto order-lg-1 order-2 my-5'>
                <h1 className=" ">{props.Hed} <strong className="homeheading">Muhammad Jawad</strong></h1>
                <p className="mt-3 mb-4">Be the best version of your self.</p>
                <div className="">

                  <NavLink variant="outlined" to={props.lik} className=" buton">{props.bton}</NavLink>

                </div>
              </div>
              <div className='col-lg-6 mx-auto order-lg-2 order-1'>
                <img className="img-fluid animat" src={props.img} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Common;