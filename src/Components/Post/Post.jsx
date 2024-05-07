import { NavLink } from "react-router-dom";


const Post = ({post}) => {

    const {id, title, body} = post;
    return (
        <div className="border-2 border-pink-500 mt-5 rounded-lg p-4">
            <h1>Id: {id}</h1>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            <NavLink to={`/post/${id}`}><button className="btn btn-link">Show Posts</button></NavLink>
            
        </div>
    );
};

export default Post;