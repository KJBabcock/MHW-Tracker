import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StrategyEdit (props) {
    //put request
    const initForm = {gamertag: "", title: "", body: ""}
    const [formRequest, setFormRequest] = useState(initForm)
    const initState = "";
    const [gamertag, setGamertag] = useState(initState)
    const [title, setTitle] = useState(initState)
    const [body, setBody] = useState(initState)

    const navigate = useNavigate();

    let commentId = useParams();


    function handleGamertagChange(e) {
        console.log(e.target.value)
        setGamertag(e.target.value);
    }
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleBodyChange(e) {
        setBody(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const result = {gamertag: gamertag, title: title, body: body, _id: commentId.id}
        setFormRequest(result)
        console.log(result)
        fetch(`https://mhw-backend.herokuapp.com/${commentId.id}`, {method: 'PUT', mode: "cors", body: JSON.stringify(result), headers: {"Content-Type": "application/json"}});
        navigate("/strategies")
    }

    return(
        <form onSubmit={handleSubmit} className="submit-form">
            <h1>Edit</h1>
            <label htmlFor="gamertag">
                GamerTag:
            <input type="text" name="gamertag" value={gamertag} onChange={handleGamertagChange}/>
            </label>
            <label htmlFor="title">
                Title:
            <input type="text" name="title" value={title} onChange={handleTitleChange}/>
            </label>
            <label htmlFor="body">
                Body:
            <input type="text" name="body" value={body} onChange={handleBodyChange}/>
            </label>
            <input type="submit" value="Submit" className="submit"/>
            <p className="end">...</p>
        </form>
    )
}

export default StrategyEdit;