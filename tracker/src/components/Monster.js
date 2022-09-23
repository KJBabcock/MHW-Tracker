import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Monster(props){
    const {id} = useParams()
    console.log(id)
    const monsterImages = {
        //Forrest
        16: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_jagras_render_001.png",
        18: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-pukei-pukei_render_001.png",
        21: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-tobi-kadachi_render_001.png",
        22: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-anjanath_render_001.png",
        41: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathalos_render_001.png",
        //Waste
        17: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kulu-ya-ku_render_001.png",
        19: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-barroth_render_001.png",
        20: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-jyuratodus_render_001.png",
        42: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathian_render_002.png",
        27: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-diablos_render_001.png",
        //Highlands
        45: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-tzitzi-ya-ku_render_001.png",
        39: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-paolumu_render_001.png",
        35: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-legiana_render_001.png",
        //Vale
        30: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_girros_render_001.png",
        40: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-radobaan_render_001.png",
        38: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-odogaron_render_001.png",
    }

    return(
        <>
        {props.monsters ?
        <div className="monster-show">
        <h1>{props.monsters[id].name}</h1>
        <h2>{props.monsters[id].elements} {props.monsters[id].species}</h2>
        <img src = {monsterImages[id]} className="monster-pics"/>
        <div className="monster-show-box">
        <h2>{props.monsters[id].description}</h2>
        <h3 className="ailments"><span>Ailments</span>: {props.monsters[id].ailments[0] ? props.monsters[id].ailments[0].name :" None"} {props.monsters[id].ailments[1] ? props.monsters[id].ailments[1].name :null} {props.monsters[id].ailments[2] ? props.monsters[id].ailments[2].name :null} {props.monsters[id].ailments[3] ? props.monsters[id].ailments[2].name :null}
        </h3>
        <h3 className="resistances"><span>Resistances</span>: {props.monsters[id].resistances[0] ? props.monsters[id].resistances[0].element :" None"} {props.monsters[id].resistances[1] ? props.monsters[id].resistances[1].element :null}
        </h3>
        <h3 className="weaknesses"><span>Weaknesses</span> {props.monsters[id].weaknesses[0] ? props.monsters[id].weaknesses[0].element : " None"}
        {props.monsters[id].weaknesses[0] ? props.monsters[id].weaknesses[0].stars :null} {props.monsters[id].weaknesses[1] ? props.monsters[id].weaknesses[1].element :null}
        {props.monsters[id].weaknesses[1] ? props.monsters[id].weaknesses[1].stars :null} {props.monsters[id].weaknesses[2] ? props.monsters[id].weaknesses[2].element :null}
        {props.monsters[id].weaknesses[2] ? props.monsters[id].weaknesses[2].stars :null} {props.monsters[id].weaknesses[3] ? props.monsters[id].weaknesses[3].element :null}
        {props.monsters[id].weaknesses[3] ? props.monsters[id].weaknesses[3].stars :null} {props.monsters[id].weaknesses[4] ? props.monsters[id].weaknesses[4].element :null}
        {props.monsters[id].weaknesses[4] ? props.monsters[id].weaknesses[4].stars :null} {props.monsters[id].weaknesses[5] ? props.monsters[id].weaknesses[5].element :null}
        {props.monsters[id].weaknesses[5] ? props.monsters[id].weaknesses[5].stars :null} {props.monsters[id].weaknesses[6] ? props.monsters[id].weaknesses[6].element :null}
        {props.monsters[id].weaknesses[6] ? props.monsters[id].weaknesses[6].stars :null} {props.monsters[id].weaknesses[7] ? props.monsters[id].weaknesses[7].element :null}
        {props.monsters[id].weaknesses[7] ? props.monsters[id].weaknesses[7].stars :null} {props.monsters[id].weaknesses[8] ? props.monsters[id].weaknesses[8].element :null}
        {props.monsters[id].weaknesses[8] ? props.monsters[id].weaknesses[8].stars :null} {props.monsters[id].weaknesses[9] ? props.monsters[id].weaknesses[9].element :null}
        {props.monsters[id].weaknesses[9] ? props.monsters[id].weaknesses[9].stars :null}
        </h3>
        <h3 className="rewards"><span>Rewards</span>: {props.monsters[id].rewards[0] ? props.monsters[id].rewards[0].item.name :" Coming soon to the MHW API"} {props.monsters[id].rewards[1] ? props.monsters[id].rewards[1].item.name :null} {props.monsters[id].rewards[2] ? props.monsters[id].rewards[2].item.name :null} {props.monsters[id].rewards[3] ? props.monsters[id].rewards[3].item.name :null} {props.monsters[id].rewards[4] ? props.monsters[id].rewards[4].item.name :null} {props.monsters[id].rewards[5] ? props.monsters[id].rewards[5].item.name :null} {props.monsters[id].rewards[6] ? props.monsters[id].rewards[6].item.name :null} {props.monsters[id].rewards[7] ? props.monsters[id].rewards[7].item.name :null}
        </h3>
        </div>
        <p>...</p>
        </div>
        :<div>loading...</div>
        }
        </>
    )
}

export default Monster