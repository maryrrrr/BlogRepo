import PostCard from "../home/components/PostCard";
import Layout from "../../components/Layout";
const Category = ()=> {
    return(
        <Layout>
            <div className="text-center font-bold trxt-2xl mt-4">Category Title</div>
            <PostCard />
            <PostCard />
            <PostCard />
        </Layout>
    )
}
export default Category;