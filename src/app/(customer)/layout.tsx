import Navbar from "@/components/component/navbar"
import { ReactNode } from "react"


interface layoutProps{
    children:ReactNode
}

export default function layout({children}:layoutProps ){
    return(
        <div className=' overflow-hidden'>
            <Navbar/>
            {children}
        </div>
    )
}