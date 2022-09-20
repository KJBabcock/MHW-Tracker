import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Forrest(props){
    return(
        <>
        <h2>Ancient Forrest</h2>
        {props.monsters ?
        <div className="location-cards">
        <Link to ={"/16"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em101_ID.png"/>
            {props.monsters[16].name}
            </div></Link>
        <Link to ={"/18"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em102_ID.png"/>
            {props.monsters[18].name}
            </div></Link>
        <Link to ={"/21"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em109_ID.png"/>
            {props.monsters[21].name}
            </div></Link>
        <Link to ={"/22"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em100_ID.png"/>
            {props.monsters[22].name}
            </div></Link>
        <Link to ={"/41"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em002_ID.png"/>
            {props.monsters[41].name}
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Forrest