import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation"
import devices from "../../images/finish.png"
import "./top.css"

function finishAcc(){
    return(
        <main>
            <Navigation></Navigation>
            <div className="finish-child">
                <div className="finish">
                    <img src={devices} alt="" />
                    <small>Step {} of 3 </small>

                    <h1>Finsish setting up your account</h1>
                    <p>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                    
                    <button>
                        <Link to={'/create/regform'} > Next</Link>
                       
                    </button>
                </div>
            </div>
        </main>
    )
}
export default finishAcc;