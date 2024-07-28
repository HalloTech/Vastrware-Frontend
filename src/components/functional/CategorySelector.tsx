'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CategorySelectorProps{
    name:string
}

export default function CategorySelector({name}:CategorySelectorProps ){
    const searchParams=useSearchParams()
    const {replace}=useRouter()
    const pathname=usePathname()
    
    return(
        <>
            <button 
            onClick={(e)=>{
                const params = new URLSearchParams(searchParams);
                params.set('category', name);
                if(pathname=='/'){
                    replace(`${pathname}search?${params.toString()}`);
                }else{
                    replace(`${pathname}?${params.toString()}`);
                }
            }} type="button">
                {name}
            </button>
        </>
    )
}