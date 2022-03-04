import React from "react";
import "./Site.css";

function Connect () {
    return(
        <div id="connect" className="col-3 mx-auto h-50 bg-light rounded p-3">
                <h2 className="fs-3 h2 border-bottom text-info mb-3 pb-2">Connect with me</h2>
                <div className="row">
                  <div className="col-4">
                    <a href="https://github.com/ShahlaAliyeva" target="blank_"><img className="img-fluid" src="./assets/images/github-128.png" alt=""/></a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.linkedin.com/in/%C5%9Fehla-eliyeva-16002814b/" target="blank_"><img className="img-fluid" src="./assets/images/linkedin-128.png" alt=""/></a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.facebook.com/settings?tab=account&section=username" target="blank_"><img className="img-fluid" src="./assets/images/stackoverflow-128.png" alt=""/></a>
                  </div>
              </div>
            </div>
    )
}

export default Connect;