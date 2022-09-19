import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Highlands(props){
    return(
        <>
        <title>Coral Highlands</title>
        {props.monsters ? 
        <>
        <Link to ={"/45"}>{props.monsters[45].name}</Link>
        <Link to ={"/39"}>{props.monsters[39].name}</Link>
        <Link to ={"/35"}>{props.monsters[35].name}</Link>
        </>
        :<div>loading...</div>
    }
    </>
    )
}

export default Highlands