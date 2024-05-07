import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id,  title, body} =post;
    
    return (
        <div className="border-2 border-pink-500 mt-5 rounded-lg p-4">
            <h1>Id: {id}</h1>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetails;