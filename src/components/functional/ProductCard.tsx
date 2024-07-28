'use client'

import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { useSearchParams,useRouter,usePathname } from "next/navigation"

interface ProductCardProps{
    product:any
}

export default function ProductCard({product}:ProductCardProps ){
    const pathname=usePathname()
    const {replace}=useRouter()
    const searchParams=useSearchParams()

    const handleProductClick=()=>{
        const params=new URLSearchParams(searchParams)
        if(!searchParams.get('category')){
            params.set('category',product.category)
            replace(`${pathname}product/${product.id}?${params.toString()}`)
        }else{
            replace(`${pathname}product/${product.id}?${params.toString()}`)
        }
    }
    return(
        <Card onClick={()=>handleProductClick()} key={product.id}>
            <img
                // src="/placeholder.svg"
                src={product.image}
                width={300}
                height={300}
                alt="Product Image"
                className="rounded-t-md object-contain w-full aspect-square"
            />
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 overflow-hidden" style={{display:'-webkit-box',lineClamp:1,'WebkitLineClamp':1,'WebkitBoxOrient':'vertical'}}>{product.title}</h3>
                <p className="text-muted-foreground mb-4 overflow-hidden " style={{display:'-webkit-box',lineClamp:3,'WebkitLineClamp':3,'WebkitBoxOrient':'vertical'}}>{product.description}</p>
                <div className="flex items-center justify-between">
                <span className="font-bold text-lg">{product.price}</span>
                <Button>Add to Cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}