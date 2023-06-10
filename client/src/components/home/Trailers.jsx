import React from "react";
import "./trailer.css";
import Top from "./Top"
import gif from "../../images/giphy.gif"
import ReusableTrailers from "./ReusableTrailers";
import requests from "../helper/request";
function Trailer (){




    return(
        <main>
           <Top></Top>
           <div className="categorycontainer">
            {
                requests.map(single=>{
                    return   <ReusableTrailers title={single?.tittle} api={single?.api} key={single?.key} backdrop={single?.backdrop}></ReusableTrailers>
                })

            }


           </div>
 
        </main>
    );
}

export default Trailer;