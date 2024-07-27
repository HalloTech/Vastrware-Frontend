'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import  { signInType, signUpType } from "@/types/auth"
import {jwtDecode} from 'jwt-decode'

interface AuthContextProps{
    children:ReactNode
}

type Context={
    userData:any,
    signUp:({username,email,password}:signUpType)=>Promise<string>,
    signIn:({email,password}:signInType)=>Promise<string>
}

const AuthContext=createContext<Context | null>(null)

export const decodeJWT=(jwt:string)=>{
    const decode=jwtDecode(jwt)
    return decode
}

export const useAuth=()=>{    
    const context=useContext(AuthContext)
    if(!context){
        throw new Error('Can not Context outside of the provider')
    }
    return context
}

export default function AuthContextProvider({children}:AuthContextProps ){

    const [userData,setUserData]=useState<any>('')

    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(!token){
            setUserData(null)
            return
        }
        const user:any=decodeJWT(JSON.parse(token).accessToken)

        console.log(user.user)
        
        setUserData(user.user)
    },[])

    async function signIn({email,password}:signInType){
        try {
            const res=await fetch(`http://localhost:3002/api/users/login`,{
                method:'POST',
                body:JSON.stringify({
                    email,password
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
            const result=await res.json()
            if(!result.accessToken){
                console.log(result.errors[0].msg)
                throw Error(result.errors[0].msg)
            }
            localStorage.setItem('token',JSON.stringify(result))
            const user:any=decodeJWT(result.accessToken)
            setUserData(user.user)
            return 'Login successfully!'
        } catch (error:any) {
            console.log(error.message)
            return error.message
        }
    }

    async function signUp({username,email,password}:signUpType){
        try {
            const res=await fetch(`http://localhost:3002/api/users/signup`,{
                method:'POST',
                body:JSON.stringify({
                    username,email,password
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
            const result=await res.json()
            console.log('RESULT',result)
            if(!result){
                throw Error('Unable to signin try again!')
            }
            setUserData(result)
            localStorage.setItem('token',JSON.stringify(result))
            return 'Signup successfully!'
        } catch (error:any) {
            return error.message
        }
    }

    async function Logout(){
        
    }

    return(
        <AuthContext.Provider value={{userData,signUp,signIn}}>
            {children}
        </AuthContext.Provider>
    )
}