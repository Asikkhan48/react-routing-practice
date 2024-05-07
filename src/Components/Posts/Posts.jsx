import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    const posts = useLoaderData();

    return (
        <>
        <div className="mt-10">
            <h1>Posts: {posts.length}</h1>
        </div>
         <div className="grid md:grid-cols-3 gap-5">
         {
            posts.map(post => <Post key={post.id} post={post}></Post>)
         }
         </div>
        </>
    );
};

export default Posts;