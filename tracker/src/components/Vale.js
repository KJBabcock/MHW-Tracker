import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vale(props){
    return(
        <>
        <h2>Rotten Vale</h2>
        {props.monsters ? 
        <div className="location-cards">
        <Link to ={"/30"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em112_ID.png"/>
            {props.monsters[30].name}
            </div></Link>
        <Link to ={"/40"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em114_ID.png"/>
            {props.monsters[40].name}
            </div></Link>
        <Link to ={"/38"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em113_ID.png"/>
            {props.monsters[38].name}
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Vale