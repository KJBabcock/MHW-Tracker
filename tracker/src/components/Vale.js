import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vale(props){
    return(
        <>
        <title>Rotten Vale</title>
        {props.monsters ? 
        <>
        <Link to ={"/30"}>{props.monsters[30].name}</Link>
        <Link to ={"/40"}>{props.monsters[40].name}</Link>
        <Link to ={"/38"}>{props.monsters[38].name}</Link>
        </>
        :<div>loading...</div>
    }
    </>
    )
}

export default Vale