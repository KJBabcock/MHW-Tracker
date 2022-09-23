import { useState, useEffect } from "react";

function Strategies(props) {
    // const URL = "https://mhw-backend.herokuapp.com/";
    // const [strategies, setStrategies] = useState(null)

    // const getStrategies = async () => {
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     // console.log(data);
    //     setStrategies(data);
    // };

    // useEffect(() => {
    //     getStrategies();
    // }, []);

    const strategiesArray = []
    function populateStrategies () {
        for (let i=0; i<props.strategies.length; i++) {
            strategiesArray.push(<div className="comment1">
                <p><span>GamerTag</span>: {props.strategies[i].gamertag}</p>
                <a href={`/strategies/${props.strategies[i]._id}`} className="strategiesTitle">{props.strategies[i].title}</a>
                <p>{props.strategies[i].body}</p>
                <p>comment id: {props.strategies[i]._id}</p>
                </div>)
        }
    }

    const strats = props.strategies
    if (strats) {
        populateStrategies()
    }

    return(
        <div>
        <div>
            <h1>Strategies</h1>
            <p className="p-strategy">Post what worked for you! Maybe it will help someone!</p>
            <a href = "/create_strategies"><button>Create Strategy</button></a>
        </div>
        <div className="comment">
        {strategiesArray}
        </div>
        <p className="end">...</p>
        </div>
    )
}
export default Strategies