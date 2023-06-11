import React from "react";
import "./signin.css";
import logo from "../../images/logo-netflix.png";
import axios, { Axios } from "axios";
import { useState } from "react";
import gif from "../../images/giphy.gif";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";
function Singin() {
  const [preloader, setpreloader] = useState();
  const [error, setError] = useState("");

  const redirectFunction = () => {
    return (window.location.href = "/trailers");
  };
  const handlesubmit = async (e) => {
    setpreloader(true);

    const form = document.querySelector("form");
    e.preventDefault();
    const formdata = new FormData(form);

    // console.log([...formdata])
    const userData = {
      email_address: formdata.get("email_address"),
      password: formdata.get("password"),
    };
    console.log(userData);
    await axios
      .post("http://localhost:8000/api/login", userData)
      .then((data) => {
        console.log(data.data);
        setpreloader(false);
        if (data.data.error) toast.error(data.data.error);
        if (data.data.status === 200 && data.data.loged === true) {
          toast.success("user loged in");
          setTimeout(redirectFunction, 700);
        }
      })
      .catch((err) => {
        toast.error("failed to add user");
      });
  };
  console.log(preloader);

  return (
    <main>
      <ToastContainer
        position={"top-center"}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={500}
      />

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
                    {preloader === true && <img src={gif} alt="" />}
                  </div>
                  <div className="signin">
                    <form onSubmit={handlesubmit}>
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
                            style={{ colour: "white" }}
                          />
                        </div>
                        <div className="needHelp">
                          <p>Need help?</p>
                        </div>
                      </div>

                      <div className="createAcc">
                        <Link
                          id="link"
                          to={"/"}
                          style={{ textDecoration: "none" }}
                        >
                          
                          <p>
                            
                            <span> New to Netflix? </span>Sign up now
                          </p>
                        </Link>
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
           <Footer></Footer>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Singin;
