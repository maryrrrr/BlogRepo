import Layout from "../../components/Layout";
import CommentCard from "./components/CommentCard";

const Post = () => {
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