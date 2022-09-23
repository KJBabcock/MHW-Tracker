import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vale(props){
    return(
        <>
        <h1>Rotten Vale</h1>
        {props.monsters ? 
        <div className="location-cards">
        <Link to ={"/30"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1013817407125382435/7F96EDDA0F65AD5B02589A618A13F893D6FE4522/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em112_ID.png"/>
            <p>{props.monsters[30].name}</p>
            </div>
            </div></Link>
        <Link to ={"/40"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1013817407125382435/7F96EDDA0F65AD5B02589A618A13F893D6FE4522/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em114_ID.png"/>
            <p>{props.monsters[40].name}</p>
            </div>
            </div></Link>
        <Link to ={"/38"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1013817407125382435/7F96EDDA0F65AD5B02589A618A13F893D6FE4522/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em113_ID.png"/>
            <p>{props.monsters[38].name}</p>
            </div>
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Vale