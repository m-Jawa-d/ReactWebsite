import React from 'react';
import Footer from "./Footer";

const MyProjects=()=>{
    return(
        <>
        <div className="container-fluid">
        <div className="row mt-5">
        <div className="col-lg-10 text-center col-10 mx-auto">
        <h1 className="text-center mb-3 text-capitalize">#1 website</h1>
        <p>Thsi was my first project using html and css only.</p>
        <iframe className="w-100 hih"  src="https://www.youtube.com/embed/NUaA-2wKAdQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        </div>
        <div className="row mt-5">
        <div className="col-lg-10 text-center col-10 mx-auto">
        <h1 className="text-center mb-3 text-capitalize">#2 Responsive website</h1>
        <p>This was my second project  Responsive Website using html ,css & bootstrap.</p>
        <iframe className="w-100 hih" src="https://www.youtube.com/embed/PiIp2mN6alE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        </div>
        <div className="row mt-5">
        <div className="col-lg-10 text-center col-10 mx-auto">
        <h1 className="text-center mb-3 text-capitalize">#3 Responsive welldesigned website</h1>
        <p>This was my third project  Responsive Website using html ,css, bootstrap and js.</p>
        <iframe className="w-100 hih" src="https://www.youtube.com/embed/mp5ZsVMLOBI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        </div>
        <div className="row mt-5">
        <div className="col-lg-10 text-center col-10 mx-auto">
        <h1 className="text-center mb-3 text-capitalize">#4 todo app using reactjs</h1>
        <p>This was my reactjs tiny project using react js hooks , bootstrap,Material Ui.</p>
        <iframe className="w-100 hih" src="https://www.youtube.com/embed/JzI1QjjJPf8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        </div>
        <div className="row mt-5">
        <div className="col-lg-10 text-center col-10 mx-auto">
        <h1 className="text-center mb-3 text-capitalize">#5 Animated Website using Reactjs</h1>
        <p>This is my react small project a animated full Responsive website using react js hooks ,BrowserRouter,Material UI.</p>
        <iframe className="w-100 hih"  src="https://www.youtube.com/embed/RSlP_iadK3E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        </div>

        </div>
        <Footer/>
        </>
    )
}
export default MyProjects;