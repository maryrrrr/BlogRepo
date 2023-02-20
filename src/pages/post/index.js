import Layout from "../../components/Layout";
import CommentCard from "./components/CommentCard";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

const Post = () => {
    const { id }= useParams();
    const getPost = async ( id ) => {
        fetch(`${process.env.REACT_APP_SUPABASE_PROJECT_URL}/rest/v1/posts?id=eq.${id}&select=*`,
        {
            method: "GET",
            headers:{ 
                apikey: REACT_APP_SUPABASE_ANON_KEY,
                Authorization: REACT_APP_SUPABASE_ANON_KEY,
            },
        }
        )
    .then((res) => res.json())
    .then((response) => {console.log(response)});
    }
    useEffect(() => {
        getPost(id);
    },[id]);


    return(
        <Layout>
            <div className="border border-black rounded p-2 my-2">
                <div className="m-2">Image</div>
                <h1 className="font-bold text-3xl">Post Title</h1>
                <div>Post Content</div>
                <div className="flex">
                    <div>like</div>
                </div>
            </div>
            <div className="border border-black p-2">
                <div className="text-xl font-bold">Post comment</div>

                <div className="flex border border-black rounded my-2">
                    <input 
                    className="flex-1 border-none outline-none p-2" 
                    placeholder="Type Your Comments Here..."
                    />
                    <button className="mx-2 rounded">Send</button>
                </div>
                <div>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                </div>
            </div>
        </Layout>
    );  
};
export default Post;