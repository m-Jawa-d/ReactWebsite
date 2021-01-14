import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../node_modules/popper.js/dist/popper";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"));


    // <div className="container-fluid nav_bg">
    // <div className=" row ">
    // <div className="col-10 mx-auto">

    // </div>
    // </div>
    // </div>
