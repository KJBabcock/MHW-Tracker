import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Highlands(props){
    return(
        <>
        <h1>Coral Highlands</h1>
        {props.monsters ? 
        <div className="location-cards">
        <Link to ={"/45"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1019447236866484692/0A9A1E183874E4E59136106D140A17C25CB54463/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em120_ID.png"/>
            <p>{props.monsters[45].name}</p>
            </div>
            </div></Link>
        <Link to ={"/39"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1019447236866484692/0A9A1E183874E4E59136106D140A17C25CB54463/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em110_ID.png"/>
            <p>{props.monsters[39].name}</p>
            </div>
            </div></Link>
        <Link to ={"/35"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1019447236866484692/0A9A1E183874E4E59136106D140A17C25CB54463/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em111_ID.png"/>
            <p>{props.monsters[35].name}</p>
            </div>
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Highlands