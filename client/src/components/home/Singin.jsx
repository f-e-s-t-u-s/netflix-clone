import React from "react";
import "./signin.css";
import logo from "../../images/logo-netflix.png"
import axios, { Axios } from 'axios'
import { useState } from "react";
import gif from "../../images/giphy.gif"
function Singin() {
  const[preloader,setpreloader]=useState()


  const handlesubmit=async(e)=>{
    setpreloader(true)

    const form =document.querySelector('form')
    e.preventDefault()
    const formdata= new FormData(form)

    // console.log([...formdata])
    const userData = {
      email_address: formdata.get('email_address'),
      password: formdata.get('password')


    }
    console.log(userData)
    await axios.post('http://localhost:8000/api/register',userData).then(data=>{
      setpreloader(false)
    }).catch(err=>console.log(err))

  }
console.log(preloader)


  return (
    <main>
      <div className="parent">
        <div className="child">
          <div className="background">
            <div className="darken">
              <div className="nav">
                <img src={logo} alt="" />
              </div>

              <div className="center">
                <div className="sign">
                  <div className="gif">
                 {preloader===true &&  <img src={gif} alt="" />}
                  </div>
                  <div className="signin">
                    <form  onSubmit={handlesubmit}>
                      <h1>Sign In</h1>
                      <div className="input">
                        <div className="email">
                          <input
                            type="email"
                            name="email_address"
                            id="email_address"
                            placeholder="Email or phone number"
                          />
                        </div>
                        <div className="password">
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                          />
                        </div>
                        </div>

                        <div className="submit">
                          <button type="submit">Sign In</button>
                        </div>


                        <div class="remember">
                          <div className="checkbox">
                          <input
                            type="checkbox"
                            name="Remember me"
                            id="remember"
                            style={{colour:'white'}}
                          />
                          </div>
                          <div className="needHelp"><h3>Need help?</h3></div>
                          
                        </div>

                        <div className="createAcc">
                          <a id="link"
                            href="/Home.jsx"
                            style={{ textDecoration: 'none'}}
                          >
                            {" "}
                            <p> <span> New to Netflix? </span>Sign up now</p>{" "}
                          </a>
                        </div>

                        <div className="protected">
                          <p>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot. <span> Learn more.</span>
                          </p>
                        </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
           <span>&#169;</span> Festus Gitahi
        </div>
          </div>
        </div>

  
      </div>
    </main>
  );
}

export default Singin;
