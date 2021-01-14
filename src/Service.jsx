import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import { CardData } from "./Cards";
const Service = () => {
  return (
    <>
      <div>
        <h1 className=' text-center mt-5 my-3'>Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className=" row ">
          <div className="col-10 mx-auto">
            <div className="row">
              {CardData.map((val, i) => {
                return (
                  <div className="col-lg-4 mb-4 outlin col-md-5 col-10 mx-auto gy-3">
                    <Cards value={val.Title} Img={val.Img} />
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
      <div className='my-2'>
        <Footer />
      </div>
    </>
  )
}
export default Service;