import { useParams } from 'react-router-dom';

function StrategyShow (props) {
    let commentId = useParams();
    return (<div>
        {props.strategies ?
            <div>
                <p>comment id: {commentId.id}</p>
                <a href={`/strategies/${commentId.id}/edit`}><button>edit comment</button></a>
                <button>delete comment</button>
            </div>
        :null}
    
    </div>)
}

export default StrategyShow;