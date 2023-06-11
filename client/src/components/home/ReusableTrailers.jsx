import React from "react";
import "./home.css";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import axios from "axios";
import movieTrailer from "movie-trailer";
import { ToastContainer, toast } from "react-toastify";
function ReusableTrailers({ api, title, backdrop }) {
  const [trailerImage, setTrailerImage] = useState([]);
  //   trailer url
  const [trailerurl, settrailerurl] = useState("");
  const base_url = "https://api.themoviedb.org/3";
  const image_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    axios.get(`${base_url}${api}`).then((data) => {
      setTrailerImage(data.data.results);
    });
  }, []);
  console.log(trailerImage);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  //   play video function
  const playVideo = (trailer) => {
    const movie = trailer?.title || trailer?.name || trailer?.original_name;

    if (trailerurl) {
      settrailerurl("");
    } else {
      movieTrailer(movie || "")
        .then((url) => {
          // destructure the url to find the id
          const urlparams = new URLSearchParams(new URL(url).search);
          console.log(urlparams.get("v"));
          urlparams.get("v") != ""
            ? settrailerurl(urlparams.get("v"))
            : settrailerurl(urlparams.get("query"));
        })
        .catch((error) => {
          toast.error("trailer not found");
        });
    }

    //    youtube options
  };
  return (
    <div className={`category ${backdrop && "mainholder"}`}>
      <ToastContainer
        position={"top-center"}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        autoClose={500}
      />
      <h1>{title}</h1>
      <div className="youtubecontainer">
      {trailerurl && (
        <YouTube videoId={`${trailerurl}`} opts={opts} className="youtube" />
      )}
      </div>
  
      <div className="trailerimages">
        {trailerImage.map((trailer) => {
          return (
            
            <img
              className={`movie ${backdrop && "main"} `}
              src={
                backdrop
                  ? ` ${image_URL}${trailer?.poster_path}`
                  : ` ${image_URL}${trailer?.backdrop_path}`
              }
              alt=""
              onClick={() => {
                playVideo(trailer);
              }}
            />
          );
        })}
      
      </div>
     
    </div>
  );
}

export default ReusableTrailers;
