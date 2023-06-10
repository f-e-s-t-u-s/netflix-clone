import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import "./top.css";



function Regform() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const email = queryParams.get("email") || ""
    
  return (
    <main>
       
      <Navigation></Navigation>
      <div className="reg-child">
        <form action="" method="POST">
        <div className="reg">
          <small>Step 2 of 3</small>
          <h1>Create a password to start your membership</h1>

          <p>Just a few more steps and you're done! We hate paperwork, too.</p>
          <input type="email" name="" id="" placeholder="email" value={email} />
          <input type="password" name="" id="" placeholder="add a password" />

          <button>
            <Link to={'/login'}>
            Next
            </Link>
            </button>

        </div>
        </form>
      </div>
     
    </main>
  );
}
export default Regform;
