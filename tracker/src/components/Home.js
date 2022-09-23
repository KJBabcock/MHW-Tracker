import { Link } from "react-router-dom";

function Home(props) {
    return(
        <>
        {props.monsters ? 
        <>
        <Link to ={"/forrest"}><div className="forrest-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/948458317596460895/F60B2D5B3705468242C53E7B1641E016F8E46C7F/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 105%"}}><div className="forrestBox">Ancient Forest</div></div></Link>
        <Link to ={"/waste"}><div className="waste-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1019448317674862481/9613757552EE9715AEC4306B9C497B9278F7AF45/?imw=1024&imh=327&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 105%"}}><div className="wasteBox">Wildspire Waste</div></div></Link>
        <Link to ={"/highlands"}><div className="highlands-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1673617311733387413/36EC42A652EA6B923B6C61DC1FE7190463A11891/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 105%"}}><div className="highlandsBox">Coral Highlands</div></div></Link>
        <Link to ={"/vale"}><div className="vale-div" style={{backgroundImage: `url("https://steamuserimages-a.akamaihd.net/ugc/1046471515395448546/3931629896DFD9E3612C825AE60D8DCB29ECAA2A/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 105%"}}><div className="valeBox">Rotten Vale</div></div></Link>
        </>
        :null
        }
        </>
    )
}

export default Home