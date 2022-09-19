import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Forrest(props){
    return(
        <>
        <title>Ancient Forrest</title>
        {props.monsters ? 
        <>
        <Link to ={"/16"}>{props.monsters[16].name}</Link>
        <Link to ={"/18"}>{props.monsters[18].name}</Link>
        <Link to ={"/21"}>{props.monsters[21].name}</Link>
        <Link to ={"/22"}>{props.monsters[22].name}</Link>
        <Link to ={"/41"}>{props.monsters[41].name}</Link>
        </>
        :<div>loading...</div>
        }
        </>
    )
}

export default Forrest