import React from "react";
import "./trailer.css";
import Top from "./Top"
import gif from "../../images/giphy.gif"
import ReusableTrailers from "./ReusableTrailers";
import requests from "../helper/request";
import Footer from "./Footer";
function Trailer (){




    return(
        <main className="black">
           <Top></Top>
           <div className="categorycontainer">
            {
                requests.map(single=>{
                    return   <ReusableTrailers title={single?.tittle} api={single?.api} key={single?.key} backdrop={single?.backdrop}></ReusableTrailers>
                })

            }

<Footer></Footer>
           </div>
           
 
        </main>
    );
}

export default Trailer;