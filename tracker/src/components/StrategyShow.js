import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function StrategyShow (props) {
    let commentId = useParams();
    const navigate = useNavigate();

    function handleDelete(){
        fetch(`https://mhw-backend.herokuapp.com/${commentId.id}`, {method: 'DELETE', mode: "cors", headers: {"Content-Type": "application/json"}});
        navigate("/strategies")
    }
    return (<div>
        {props.strategies ?
            <div>
                <h1>Edit</h1>
                <p>comment id: {commentId.id}</p>
                <a href={`/strategies/${commentId.id}/edit`}><button>edit comment</button></a>
                <button onClick = {handleDelete}>delete comment</button>
            </div>
        :null}
    
    </div>)
}

export default StrategyShow;