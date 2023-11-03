import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import "./top.css";
import preloaderimage from "../../gifs/preloader-red.gif";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Regform() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || "";
  const [preloader, setpreloader] = useState();
  const handlesubmit = (e) => {
    const form = document.querySelector("form");

    e.preventDefault();

    const formvalues = new FormData(form);
    const password = formvalues.get("password");
    const useremail = formvalues.get("email");
    const values = {
      email: useremail,
      password: password,
    };

    const redirect = () => (window.location.href = "/login");

    if (password !== "") {
      console.log(password, useremail);
      setpreloader(true);
      axios
        .post("https://netflix-secondclone.onrender.com/api/register", values)
        .then((data) => {
          setpreloader(false);
          if (data.data.loged === true) {
            toast.success("user added successfuly");
            setTimeout(redirect, 900);
          }
          if (data.data.error) toast.error(data.data.error);
        });
    }
  };
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
      <Navigation></Navigation>
      <div className="reg-child">
        {preloader === true && (
          <div className="preloader">
            <img src={preloaderimage} alt="" />
          </div>
        )}
        <form className="form" onSubmit={handlesubmit}>
          <div className="reg">
            <small>Step 2 of 3</small>
            <h1>Create a password to start your membership</h1>

            <p>
              Just a few more steps and you're done! We hate paperwork, too.
            </p>
            <input
              name="email"
              className="input1"
              placeholder="email"
              value={email}
            />
            <input
              className="input1"
              type="password"
              name="password"
              id=""
              placeholder="add a password"
            />

            <button className="btn" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
export default Regform;
