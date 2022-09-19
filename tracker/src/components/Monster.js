import { useParams } from "react-router";

function Monster(props){
    const id = useParams()
    console.log(id)
    return(
        <>
        {props.monsters ?
        <>
        {props.monsters[id.monster].name}
        </>
        :<div>loading...</div>
        }
        </>
    )
}

export default Monster