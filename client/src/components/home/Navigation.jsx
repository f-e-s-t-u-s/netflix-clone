import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo-netflix.png";
import './home.css'
function Navigation() {
  return (
    <div className="navigation">
          <div className="navImage">
            <img src={logo} alt="" />
          </div>
          <div className="signup">
            <button>
              <Link to={'/login'}>Sign in</Link>
            </button>
          </div>
        </div>
  )
}

export default Navigation