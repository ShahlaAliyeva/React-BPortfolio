import React, {Component} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import "./images/linkedin-128.png"

function About () {
  return (
    <>
    <div className="container my-5">
        <div className="row  justify-content-center">
            <div className="col-7 p-3 bg-light rounded">
                <h2 className="fs-3 h2 border-bottom text-info mb-3 pb-2">About Me</h2>
                <img src= {require("./images/kisspng-computer-icons-user-profile-avatar-profile-transparent-png-5ab03f3dba6729.3105587215214999657635.jpg")} alt="" className="w-25 float-left d-inline mr-2"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. At quisquam, architecto veritatis possimus
                    unde asperiores animi laudantium aliquam ad laborum
                    nam quibusdam molestias atque beatae quo tenetur
                    itaque, molestiae, tempora voluptatibus voluptatem
                    quis ea? Dolore similique eius non cumque quaerat
                    eum maiores, repudiandae ducimus quod, consectetur
                    necessitatibus quos, at aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur ratione enim. Repudiandae recusandae, distinctio ipsam delectus amet libero fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat totam minus odit eius mollitia commodi repellat maiores. Modi velit obcaecati porro provident eligendi voluptatem aliquid veritatis neque dicta, veniam aperiam laudantium doloribus iste dolorem quia, eveniet illo ullam quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo itaque perferendis maxime accusantium mollitia necessitatibus sunt rem, iusto soluta?</p>
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

export default About;