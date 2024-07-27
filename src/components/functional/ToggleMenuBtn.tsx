'use client'
import { Cross, CrossIcon, MenuIcon, ShoppingCartIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LogoutBtn from "./LogoutBtn";

interface ToggleMenuBtnProps{
    user:any
}

export default function ToggleMenuBtn({user}:ToggleMenuBtnProps ){
    const slideRight='opacity-0 translate-x-24 invisible'
    const [showMenu,setShowMenu]=useState(false)

    return(
        <div className={`relative z-20`}>
            <Button onClick={()=>setShowMenu(!showMenu)} variant="ghost" size="icon" className="md:hidden">
                {showMenu?<X className="h-6 w-6"/>:<MenuIcon className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
            </Button>
            <div style={{transition:'all 0.3s ease'}} className={` 
                z-20 absolute right-0 bg-white shadow-xl flex flex-col justify-center items-start rounded-md text-black px-5 py-3
                ${showMenu?'':slideRight}`} >
                    <Link href="#" className="hover:underline" prefetch={false}>
                    Categories
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                    About
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                    Contact
                    </Link>
                    {user &&<Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                    <ShoppingCartIcon className="h-5 w-5" />
                    Cart
                    </Link>}
                    {user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>{user?.username?.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                            <div className="h-4 w-4" />
                            <span>Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                            <div className="h-4 w-4" />
                            <span>Settings</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogoutBtn/>
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    ) : (
                    <div className="flex gap-2">
                        <Link href="/auth" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Login
                        </Link>
                        {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Register
                        </Link> */}
                    </div>
                    )}
                
            </div>
        </div>
    )
}