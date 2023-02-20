import PostCard from "./components/PostCard";
import Layout from "../../components/Layout";
import {supabase} from "../../data/supabase/client";
import { useEffect, useState } from "react";

const Home = ()=> {

    const[lastPosts,setLastPosts]= useState([]);
    const[error,setError]= useState(null);

    const getSession= async() => {
        const session = await supabase.auth.getSession();
    }

    const getAllPosts = async() => {
        const { data: posts, error } = await supabase.from('posts').select('*')
        setLastPosts(posts);
        setError(error);
    };

    useEffect( ()=> {
        getAllPosts();
    },[]);
    
return(
        <Layout>
                {!error && lastPosts.length>0 && setLastPosts.map((post) => <PostCard key= {post.id} postData={post} />)}
        </Layout>
    )
}
export default Home;