import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Waste(props){
    return(
        <>
        <h1>Wildspire Waste</h1>
        {props.monsters ? 
        <div className="location-cards">
        <Link to ={"/17"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1296423771110245341/1FC39F605AE7D2BD29899505C1208068F0525B20/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em107_ID.png"/>
            <p>{props.monsters[17].name}</p>
            </div>
            </div></Link>
        <Link to ={"/19"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1296423771110245341/1FC39F605AE7D2BD29899505C1208068F0525B20/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em044_ID.png"/>
            <p>{props.monsters[19].name}</p>
            </div>
            </div></Link>
        <Link to ={"/20"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1296423771110245341/1FC39F605AE7D2BD29899505C1208068F0525B20/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em108_ID.png"/>
            <p>{props.monsters[20].name}</p>
            </div>
            </div></Link>
        <Link to ={"/42"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1296423771110245341/1FC39F605AE7D2BD29899505C1208068F0525B20/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em001_ID.png"/>
            <p>{props.monsters[42].name}</p>
            </div>
            </div></Link>
        <Link to ={"/27"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1296423771110245341/1FC39F605AE7D2BD29899505C1208068F0525B20/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em007_ID.png"/>
            <p>{props.monsters[27].name}</p>
            </div>
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Waste