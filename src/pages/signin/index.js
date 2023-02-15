const SignIn= ()=> {
    return(
        <div className= "container mx-auto mt-20" style={{maxWidth: "320px"}}>
            <div className= "text-4xl text-center">Let's Go!</div>
            <div className= "rounded border border-black p-4 my-2">
                <div>Email</div>
                <input 
                    placeholder="Don't forget @" 
                    className="w-full border border-black rounded mt-2 p-2"/>

                <div className="mt-4">Password</div>
                <input 
                    placeholder="At least 6 characters" 
                    className="w-full border border-black rounded mt-2 p-2"/>
            </div>
            <button className="w-full rounded bg-black text-white p-2">SignIn</button>
        </div>
    )
}
export default SignIn;