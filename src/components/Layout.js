import Nav from "./Nav";

const Layout = ({Children}) => {
    return(
        <div 
        className= 'container mx-auto' 
        style= {{ maxWidth: "640px" }}
        >
            <div className='text-center text-5xl my-5'>"My Awesome Blog"</div>
                <Nav />
                <div>
                    {Children}
                </div>
            </div>

    )
}
export default Layout;