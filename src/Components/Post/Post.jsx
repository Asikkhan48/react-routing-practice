import { NavLink, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const {id, title, body} = post;

    // Navigate Handlers
    const navigate = useNavigate();

    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div className="border-2 border-pink-500 mt-5 rounded-lg p-4">
            <h1>Id: {id}</h1>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            <NavLink to={`/post/${id}`}><button className="btn btn-link">Show Posts</button></NavLink>
            <br />
            <button onClick={handleShowDetails}>handler show details</button>
        </div>
    );
};

export default Post;