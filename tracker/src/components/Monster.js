import { useParams } from "react-router";

function Monster(props){
    const {id} = useParams()

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
        <h2>{props.monsters[id].name}</h2>
        <h3>{props.monsters[id].species}</h3>
        <img src = {monsterImages[id]} className="monster-pics"/>
        </div>
        :<div>loading...</div>
        }
        </>
    )
}

export default Monster