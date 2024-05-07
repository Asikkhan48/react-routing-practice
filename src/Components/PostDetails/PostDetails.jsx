import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id,  title, body} =post;

    // Go Back
    

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="border-2 border-pink-500 mt-5 rounded-lg p-4">
            <h1>Id: {id}</h1>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            <br />
            <button className="btn btn-success" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;