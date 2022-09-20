import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Highlands(props){
    return(
        <>
        <h2>Coral Highlands</h2>
        {props.monsters ? 
        <div className="location-cards">
        <Link to ={"/45"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em120_ID.png"/>
            {props.monsters[45].name}
            </div></Link>
        <Link to ={"/39"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em110_ID.png"/>
            {props.monsters[39].name}
            </div></Link>
        <Link to ={"/35"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em111_ID.png"/>
            {props.monsters[35].name}
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Highlands