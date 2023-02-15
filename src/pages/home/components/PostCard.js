import { Link } from 'react-router-dom';
const PostCard = () =>{
    return(
        <div className= 'flex border border-black rounded my-2 p-2'>
            <div className='w-24'>
                <Link to='/post/1'>Image</Link>
            </div>

            <div className= 'flex-1'>
                <div className='text-2xl'>
                    <Link to='/post/1'>Post Title</Link>
                </div>

                <div>Post Description</div>
                
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