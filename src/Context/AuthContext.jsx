import { createContext,useContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../FireBase";

let UserAuthContext=createContext();

export let UserProvider=({children})=>{
     
let [user,setUser]=useState("");

let SignUpUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

let LoginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

let LogoutUser=()=>{
    return signOut(auth);
}


let LoginWithGoogle=()=>{
    let googleAuthProvider=new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
}

useEffect(()=>{
let unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
})

return ()=>{
    unSubscribe()
}

},[])

return(
    <UserAuthContext.Provider value={{user,SignUpUser,LoginUser,LogoutUser,LoginWithGoogle}}>{children}</UserAuthContext.Provider>
)

}

export function useAuthContext(){
    return useContext(UserAuthContext);
}


