import React,{Component, useEffect,useState} from "react";
import apiconnect from "./connect";
import requests from "../helper/request";
import axios from "axios";
import './top.css'




function Top(){
    const [movie, setMovie] =useState([])
const base_url = 'https://api.themoviedb.org/3'
const image_URL='https://image.tmdb.org/t/p/original/'
  useEffect( ()=>{
    axios.get(`${base_url}${requests.netflixoriginals}`).then((response)=>{
        const data = response.data.results
        console.log(data);
        const index = Math.floor(Math.random()*response.data.results.length - 1)
        console.log(index)
        setMovie(data[index])
        console.log(data[index]);
    })
  },[])
  console.log(movie);

//   function to tream the long string of movies.overview
const substringoverview=(str,n)=>{

return str?.length>n ?str.substring(0,n-1)+".....":str

}


   
        return(
            <div className="slideshow">
                {/* make the bg_image img to ahve a width of 100%  */}
                <div className="bg_image">
                    <img src={`${image_URL}${movie?.backdrop_path}`} alt="" />
{/* make ithe moviedescription to be absolute */}
               <div className="moviedescription">
               <div className="slideshow-text">
                    <h1>{movie?.name||movie?.original_name}</h1>
                    <p> {substringoverview(movie?.overview,200)} </p>
                </div>
                <div className="slideshow-button">
                   <button>Play</button>
                   <button id="mylist">My list</button>
                </div>
               </div>
               
                </div>
            </div>
        )
    }

    export default Top