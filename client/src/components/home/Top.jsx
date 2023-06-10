import React, { Component, useEffect, useState } from "react";
import apiconnect from "./connect";

import axios from "axios";
import "./top.css";
import Play from "../../images/play.png"
import Plus from "../../images/plus.png"

function Top() {
  const api_key='560b700a0daacf78fd509bbc83fe7c5e'
  const netflixoriginals=`/discover/tv?api_key=${api_key}&with_networks=213`
  const [movie, setMovie] = useState([]);
  const base_url = "https://api.themoviedb.org/3";
  const image_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    axios.get(`${base_url}${netflixoriginals}`).then((response) => {
      const data = response.data.results;
      console.log(data);
      const index = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      console.log(index);
      setMovie(data[index]);
      console.log(data[index]);
    });
  }, []);
//   console.log(movie);

  //   function to tream the long string of movies.overview
  const substringoverview = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "....." : str;
  };

  return (
    <div className="slideshow" style={{}}>
      <div
        className="bg_image"
        style={{ backgroundImage: `url(${image_URL}${movie?.backdrop_path})` }}
      >
        <div className="moviedescription">
          <div className="slideshow-text">
            <h1>{movie?.name || movie?.original_name}</h1>
            <p> {substringoverview(movie?.overview, 200)} </p>
          </div>
          <div className="slideshow-button">
            <button> <img src={Play} alt="" /> Play</button>
            <button id="mylist"> <img src={Plus} alt="" /> My list</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
