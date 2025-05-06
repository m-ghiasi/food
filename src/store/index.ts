import { create } from 'zustand'

type AuthStore = {
    email:string;
    password:string;
    setEmail:(email:string)=>void;
    setPassword:(password:string)=>void;
}

export const useAuthStore  = create<AuthStore> ((set) => ({
    email:"",
    password:"", 
    setEmail:(email)=> set({email}),
    setPassword:(password)=> set({password})
    
}))

