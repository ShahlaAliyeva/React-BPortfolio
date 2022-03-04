import React, {useState} from "react";
import "./Site.css";
import {Link} from "react-router-dom";

function Navbar () {
    // const [click, setClick] = useState(false);
    // const handleclick = () => setClick(!click);

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container">
            <div className="row col-12">
                <div className="col-6">
                    <a className="navbar-brand font-weight-bold bg-info bg-gradient p-2 text-light" href="https://github.com/ShahlaAliyeva" target={"_blank"}>Shahla Aliyeva</a>
                </div>
                <div className="col-6">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                          <li className="nav-item mr-5">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                          </li>
                          <li className="nav-item mr-4">
                            <Link className="nav-link"to="/gallery">Portfolio</Link>
                          </li>
                          <li className="nav-item mr-5">
                            <Link className="nav-link" to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                </div>
            </div>
        </div>
        </nav>
        </>
    ) 
}

export default Navbar