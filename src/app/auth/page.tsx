'use client'

import Auth from "@/components/component/auth";
// import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

interface pageProps{
    
}

export default function page({}:pageProps ){
    // const {userData}=useAuth()

    // if(userData){
    //     redirect('/')
    // }
    return(
        <Auth/>
    )
}