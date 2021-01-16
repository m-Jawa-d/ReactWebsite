import React from "react";
import { NavLink } from "react-router-dom";
import Pic from "../src/Images/Jawad.jpg";
const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className=" row ">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white bg-light">
                            <div className="container-fluid">
                                <img className="img-fluid  img-thumbnail" src={Pic} style={{ width: '40px' }} />
                                <NavLink exact activeClassName="activ" className="navbar-brand navbrand text-uppercase ml-2 font-weight-bold" to=""> Jawad✔  </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activ" className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activ" className="nav-link" to="/service">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activ" className="nav-link" to="about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activ" className="nav-link" to="contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="activ" className="nav-link" to="Project">Projects</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;
