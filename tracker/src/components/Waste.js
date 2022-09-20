import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Waste(props){
    return(
        <>
        <h2>Wildspire Waste</h2>
        {props.monsters ? 
        <div className="location-cards">
        <Link to ={"/17"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em107_ID.png"/>
            {props.monsters[17].name}
            </div></Link>
        <Link to ={"/19"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em044_ID.png"/>
            {props.monsters[19].name}
            </div></Link>
        <Link to ={"/20"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em108_ID.png"/>
            {props.monsters[20].name}
            </div></Link>
            <Link to ={"/42"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em001_ID.png"/>
            {props.monsters[42].name}
            </div></Link>
        <Link to ={"/27"}><div>
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em007_ID.png"/>
            {props.monsters[27].name}
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Waste