import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Forrest(props){
    return(
        <>
        <h1>Ancient Forest</h1>
        {props.monsters ?
        <div className="location-cards">
            {/* <div className="forrest-div"> */}
        <Link to ={"/16"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1333579200347645459/1FD57057D066DD95C276DBD136C0899D4F6B4F55/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em101_ID.png"/>
            <p>{props.monsters[16].name}</p>
            </div>
            </div></Link>
        <Link to ={"/18"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1333579200347645459/1FD57057D066DD95C276DBD136C0899D4F6B4F55/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em102_ID.png"/>
            <p>{props.monsters[18].name}</p>
            </div>
            </div></Link>
        <Link to ={"/21"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1333579200347645459/1FD57057D066DD95C276DBD136C0899D4F6B4F55/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em109_ID.png"/>
            <p>{props.monsters[21].name}</p>
            </div>
            </div></Link>
        <Link to ={"/22"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1333579200347645459/1FD57057D066DD95C276DBD136C0899D4F6B4F55/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em100_ID.png"/>
            <p>{props.monsters[22].name}</p>
            </div>
            </div></Link>
        <Link to ={"/41"}><div className="monster-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1333579200347645459/1FD57057D066DD95C276DBD136C0899D4F6B4F55/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%"}}>
        <div className="monsterBox">
            <img src="https://mhworld.kiranico.com/storage/mhw/icon/em002_ID.png"/>
            <p>{props.monsters[41].name}</p>
            </div>
            </div></Link>
        </div>
        :<div>loading...</div>
    }
    </>
    )
}

export default Forrest