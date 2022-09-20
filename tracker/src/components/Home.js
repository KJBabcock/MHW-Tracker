import { Link } from "react-router-dom";

function Home(props) {
    return(
        <>
        {props.monsters ? 
        <>
        <Link to ={"/forrest"}><div className="home-div">Ancient Forrest</div></Link>
        <Link to ={"/waste"}><div className="home-div">Wildspire Waste</div></Link>
        <Link to ={"/highlands"}><div className="home-div">Coral Highlands</div></Link>
        <Link to ={"/vale"}><div className="home-div">Rotten Vale</div></Link>
        </>
        :null
        }
        </>
    )
}

export default Home