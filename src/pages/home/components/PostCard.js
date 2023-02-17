import { Link } from 'react-router-dom';
const PostCard = ({postData}) => {
    return(
        <div className= 'flex border border-black rounded my-2 p-2'>
            <div className='w-20 mr-2'>
                <Link to={`/post/${postData.id}`}>
                    <img 
                    src={postData.image} 
                    alt={postData.title} />
                </Link>
            </div>

            <div className= 'flex-1'>
                <div className='text-2xl'>
                    <Link to='/post/1'>{postData.title}</Link>
                </div>

                <div>{`${postData.content.substrr(0,70)}...`}</div>
                
                <div className= 'flex'>
                    <div className='py-1 px-2 hover:bg-black hover:rounded hover:text-white'>
                        like
                    </div>

                    <div className='py-1 px-2 hover:bg-black hover:rounded hover:text-white'>
                        comment
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PostCard;