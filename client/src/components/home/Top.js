import React,{Component, useEffect,useState} from "react";
import apiconnect from "./connect";
import requests from "../helper/request";
import axios from "axios";





function Top(){
    const [movie, setMovie] =useState([])
const base_url = 'https://api.themoviedb.org/3'
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

   
        return(
            <div className="slideshow">
                <div className="slideshow-text">
                    <h1>Movie Name</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui voluptate possimus nesciunt exercitationem, illum itaque labore necessitatibus officiis expedita quam eveniet dolorum ex voluptas, ab, at tempora provident tempore. </p>
                </div>
                <div className="slideshow-button">
                   <button>Play</button>
                   <button id="mylist">My list</button>
                </div>
            </div>
        )
    }

    export default Top