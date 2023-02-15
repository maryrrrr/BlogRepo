const Nav = () => {
    return(
        <nav className='border rounded border-black flex p-2'>
            <ul className= 'flex flex-1'>
                <li>
                    <a href="/" className='p-1 hover:bg-black hover: rounded hover:text-white' >
                        Home
                    </a>
                </li>
                <li>
                    <a href="/category/fun" className='p-1 hover:bg-black hover: rounded hover:text-white' >
                        Fun
                    </a>
                </li>
                <li>
                    <a href="/category/crime" className='p-1 hover:bg-black hover: rounded hover:text-white' >
                        Crime
                    </a>
                </li>
            </ul>
            <div> 
                <a href="/profile" className='p-1 hover:bg-black hover: rounded hover:text-white' >Profile</a>
            </div>
        </nav>
    )
}
export default Nav;