'use client'
import { useAuth } from "@/context/AuthContext"
import { ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import Auth from "@/components/component/auth"
import Home from "@/app/page"

interface ProtectedRouteProps{
    children:ReactNode
}

export default function ProtectedRoute({children}:ProtectedRouteProps ){
    const {userData}=useAuth()
    console.log(userData)
    const router=useRouter()
    const unprotectedRoutes=['/auth','/']
    const adminRoutes=['/dashboard','/customers','/orders','/products']
    const customerRoutes=['cart']
    const pathname=usePathname()
    // console.log(pathname,userData?.role)
    if(userData==''){
        console.log(0)
        return
    }
    else if(!userData?.id && !unprotectedRoutes.includes(pathname)){
        console.log(1,userData?.id)
        router.push('/auth')
    }
    else if(userData?.id && pathname.includes('/auth')){
        console.log(2,userData?.id)
        router.push('/')
    }
    else if(userData?.role=='admin' && customerRoutes.includes(pathname)){
        console.log(3)
        router.push('/dashboard')
    }
    else if(adminRoutes.includes(pathname) && userData?.role!=='admin'){
        console.log(4)
        router.push('/')
    }
    return(
        <>
            {children}
        </>
    )
}