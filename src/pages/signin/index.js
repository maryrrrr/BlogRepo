import { useState } from 'react';
import { supabase } from '../../data/supabase/client';
const SignIn= ()=> {

    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const [isSignIn,setIsSignIn]= useState(true);
    const [isLoading, setIsLoading]= useState(false);

    const signInUser= async() => {
        const { data, error } = await supabase.auth.signInWithPassword({
        email,
    })
        setIsLoading(false);
        }

    const signUpUser= async()=> {
        const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
        setIsLoading(false);
        }

    const submitForm= (e) => {
        e.preventDefault();
        setIsLoading(true);
        if(isSignIn){
            signInUser();
        }
        else{
            signUpUser();
        }
    }

    return(
        <div className= "container mx-auto mt-20" style={{maxWidth: "320px"}}>
            <div className= "text-4xl text-center">Let's Go!</div>
            <form  onSubmit= {submitForm}>
                <div className= "rounded border border-black p-4 my-2">
                    <div>Email</div>
                    <input 
                        placeholder="Don't forget @" 
                        className="w-full border border-black rounded mt-2 p-2"
                        onChange ={(e) => setEmail(e.target.value)}
                        type="email"
                        value= {email}
                        />

                    <div className="mt-4">Password</div>
                    <input 
                        placeholder="At least 6 characters" 
                        className="w-full border border-black rounded mt-2 p-2"
                        onChange={(e) => setPassword(e.target.value)}
                        type= "password"
                        value= {password}
                        />
                </div>
                <div className= "flex">
                    <button 
                        className="flex-1 w-full rounded bg-black text-white p-2" 
                        disabled= {isLoading}
                        type= "submit">
                        {!isLoading && isSignIn ? "Sign In": "Sign Up"}
                        {isLoading && "We're firing..."}
                    </button>

                    <div 
                        onClick={() => setIsSignIn((prev) => !prev)}  
                        className= "p-2">
                        {!isSignIn ? "Sign In": "Sign Up"}
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SignIn;