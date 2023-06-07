import React from "react";
import "./home.css";
import logo from "../../images/logo-netflix.png";
import tv from '../../images/tv.png'
import phone from '../../images/eleven.jpg'
import device from '../../images/device.png'
import ReusableHome from "../ReusableHome";
import { Link } from "react-router-dom";
import kids from '../../images/kids.png'
function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="navigation">
          <div className="navImage">
            <img src={logo} alt="" />
          </div>
          <div className="signup">
            <button>
              <Link>Sign in</Link>
            </button>
          </div>
        </div>
        <div className="information">
          <h1>Unlimited movies, TV shows, and more</h1>
          <small>Watch anywhere. Cancel anytime.</small>
          <div className="emailbox">
            <input type="text" placeholder="Email address" />
            <button>
              {" "}
              <Link>
                {" "}
                <strong>Get Started</strong>{" "}
                <i class="fa-solid fa-angle-right"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
        <ReusableHome topic='Enjoy on your TV' desc='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' image={tv}></ReusableHome>
     
        <ReusableHome topic='Download your shows to watch offline' desc='Save your favorites easily and always have something to watc' image={phone} reverse={true}></ReusableHome>
        <ReusableHome topic='Watch everywhere' desc='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' image={device}></ReusableHome>
        <ReusableHome topic='Create profiles for kids' desc='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' image={kids} reverse={true}></ReusableHome>
    </div>
  );
}

export default Home;
