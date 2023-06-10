import React, { useState } from "react";
import "./home.css";

import tv from '../../images/tv.png'
import phone from '../../images/eleven.jpg'
import device from '../../images/device.png'
import ReusableHome from "../ReusableHome";
import { Link } from "react-router-dom";
import kids from '../../images/kids.png'
import video1 from '../../gifs/video2.m4v'
import video2 from '../../gifs/video1.m4v'
import Navigation from "./Navigation";
function Home() {
  const[show,setshow]=useState(false)
  const[email,setemail]=useState('')
  const[checkemail,setcheckemail]=useState()
  const handlefocus=()=>{
    setshow(true)
  }
  const handleChange=(e)=>{
    setemail(e.target.value)
    // check if the email is valid
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)?setcheckemail(false):setcheckemail(true)


  }
  console.log(checkemail)
  // console.log(email);
  return (
    <div className="home">
      <div className="container">
        <Navigation></Navigation>
        <div className="information">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className={`emailbox ${checkemail===true ?'green':''} ${checkemail===false && 'red'}`}>
 <div className={`input `}>
 <small className={`hide ${show && 'show'}`}>email adress</small>
            <input type="text"  onFocus={handlefocus} onChange={handleChange}  value={email}/>
 </div>
            <button>
              
              <Link to={{pathname: "/create", search: `?email=${email}`}}>
                
                <strong>Get Started</strong>
                <i class="fa-solid fa-angle-right"></i>
              </Link>
            </button>
          </div>
        </div>
      </div>
        <ReusableHome topic='Enjoy on your TV' desc='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' image={tv} video={video1}></ReusableHome>
     
        <ReusableHome topic='Download your shows to watch offline' desc='Save your favorites easily and always have something to watc' image={phone} reverse={true}></ReusableHome>
        <ReusableHome topic='Watch everywhere' desc='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' image={device} video={video2} diff={true}></ReusableHome>
        <ReusableHome topic='Create profiles for kids' desc='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' image={kids} reverse={true}></ReusableHome>
       
    </div>
  );
}

export default Home;
