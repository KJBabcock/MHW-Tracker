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
            strategiesArray.push(<div>
                <p>{props.strategies[i].gamertag}</p>
                <a href={`/strategies/${props.strategies[i]._id}`}>{props.strategies[i].title}</a>
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
            <h2>Strategies</h2>
            <p>Post what worked for you! Maybe it will help someone!</p>
            <a href = "/create_strategies"><button>Create</button></a>
        </div>
        {strategiesArray}
        </div>
    )
}
export default Strategies