import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Waste(props){
    return(
        <>
        <title>Wildspire Waste</title>
        {props.monsters ? 
        <>
        <Link to ={"/17"}>{props.monsters[17].name}</Link>
        <Link to ={"/19"}>{props.monsters[19].name}</Link>
        <Link to ={"/20"}>{props.monsters[20].name}</Link>
        <Link to ={"/42"}>{props.monsters[42].name}</Link>
        <Link to ={"/27"}>{props.monsters[27].name}</Link>
        </>
        :<div>loading...</div>
    }
    </>
    )
}

export default Waste