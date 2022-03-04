import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Gallery() {
    return(
        <>
        <div className="container my-5">
        <div className="row  justify-content-center">
            <div className="col-7 p-3 bg-light rounded mb-4">
                <h2 className="fs-3 h2 border-bottom text-info mb-3 pb-2">Portfolio</h2>
            <div className="row">
                <div className="col-5 p-0 mx-auto my-2">
                    <img src={require("./images/technics-q-c-640-480-1.jpg")} className="img-fluid position-relative" alt=""/>
                    <div className="position-absolute bg-info text-light w-100"> Hangman </div>
                </div>
                <div className="col-5 p-0 mr-auto my-2">
                    <img src={require("./images/technics-q-c-640-480-2.jpg")} className="img-fluid position-relative" alt=""/>
                    <div className="position-absolute bg-info text-light w-100"> RPG Game</div>
                </div>
            </div>
            <div className="row">
                <div className="col-5 p-0 mx-auto my-2">
                    <img src={require("./images/technics-q-c-640-480-5.jpg")} className="img-fluid position-relative" alt=""/>
                    <div className="position-absolute bg-info text-light w-100"> Trivia Game </div>
                </div>
                <div className="col-5 p-0 mr-auto my-2">
                    <img src={require("./images/technics-q-c-640-480-7.jpg")} className="img-fluid position-relative" alt=""/>
                    <div className="position-absolute bg-info text-light w-100"> Rutgers Info Widget </div>
                </div>
            </div>
            <div className="row">
                <div className="col-5 p-0 mx-auto my-2">
                    <img src={require("./images/technics-q-c-640-480-9.jpg")} className="img-fluid position-relative" alt=""/>
                    <div className="position-absolute bg-info text-light w-100"> Rock Paper Scissors </div>
                </div>
            </div>
            </div>
            <div id="connect" className="col-3 mx-auto h-50 bg-light rounded p-3">
                <h2 className="fs-3 h2 border-bottom text-info mb-3 pb-2">Connect with me</h2>
                <div className="row">
                  <div className="col-4">
                    <a href="https://github.com/ShahlaAliyeva" target="blank_"><img className="img-fluid" src={require("./images/github-128.png")} alt=""/></a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.linkedin.com/in/%C5%9Fehla-eliyeva-16002814b/" target="blank_"><img className="img-fluid" src={require("./images/linkedin-128.png")} alt=""/></a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.facebook.com/settings?tab=account&section=username" target="blank_"><img className="img-fluid" src={require("./images/stackoverflow-128.png")} alt=""/></a>
                  </div>
              </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Gallery