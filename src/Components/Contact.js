import React from "react";
import "./Site.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact () {
    return(
        <>
        <div className="container my-5">
        <div className="row  justify-content-center">
            <div className="col-7 p-3 bg-light rounded mb-4">
                <h2 className="fs-3 h2 border-bottom text-info mb-3 pb-2">Contact</h2>
                <form action="#" className="text-secondary">
                    <label for="name" className="mb-2 mt-2" id="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Smith" required/>
        
                    <label for="email" className="mb-2 mt-4" id="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="example@gmail.com" required/>
        
                    <label for="message" className="mb-2 mt-4" id="msg">Message</label>
                    <textarea name="message" className="form-control" id="msg" rows="12"></textarea>
        
                    <button className="mt-3 border-0 p-3 pr-5 pl-5 rounded bg-info text-light">Submit</button>
                </form>
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

export default Contact