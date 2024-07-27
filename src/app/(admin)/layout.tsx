// import { useAuth } from "@/context/AuthContext"
import { getUserData } from "@/actions/auth"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

interface layoutProps{
    children:ReactNode
}

export default async function layout({children}:layoutProps ){
    const session=await getUserData()
    if(session.role=='customer'){
        redirect('/')
    }
    
    return(
        <div className=''>
            {children}
        </div>
    )
}