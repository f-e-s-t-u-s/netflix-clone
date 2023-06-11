import React from 'react'
import './home.css'
import { useState ,useEffect} from 'react'
import axios from 'axios'
function ReusableTrailers({api,title,backdrop}) {
    const[trailerImage,setTrailerImage]=useState([])
    const base_url = "https://api.themoviedb.org/3";
    const image_URL = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        axios.get(`${base_url}${api}`).then(data=>{
            setTrailerImage(data.data.results)
        })
    },[])
    console.log(trailerImage)
  return (
    <div className={`category ${backdrop && 'mainholder'}`}>
        <h1>{title}</h1>
        <div className="trailerimages">
       {trailerImage.map(trailer=>{
        return <img className={`movie ${backdrop && 'main'} `} src={ backdrop?` ${image_URL}${trailer?.poster_path}`:` ${image_URL}${trailer?.backdrop_path}`} alt="" />
       })}
        </div>
    </div>
  )
}

export default ReusableTrailers