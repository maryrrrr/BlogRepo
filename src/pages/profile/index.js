const Profile= ()=> {
    return(
        <div className= "container mx-auto mt-20" style={{maxWidth: "320px"}}>
        <div className= "text-4xl text-center">Hey Guy!</div>
        <div className= "rounded border border-black p-4 my-2">
            <div>What's Your Name</div>
            <input 
                placeholder="Type Your Name..." 
                className="w-full border border-black rounded mt-2 p-2"/>
        </div>
        <button className="w-full rounded bg-black text-white p-2">Update</button>
    </div>
    )
}
export default Profile;