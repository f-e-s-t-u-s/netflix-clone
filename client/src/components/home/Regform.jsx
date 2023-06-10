import React from "react";
import Navigation from "./Navigation";
import "./top.css";

function Regform() {
  return (
    <main>
      <Navigation></Navigation>
      <div className="reg-child">
        <div className="reg">
          <small>Step 2 of 3</small>
          <h1>Create a password to start your membership</h1>

          <p>Just a few more steps and you're done! We hate paperwork, too.</p>
          <input type="email" name="" id="" />
          <input type="password" name="" id="" />
          
        </div>
      </div>
    </main>
  );
}
export default Regform;
