// 'use client'

/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RvnNAC46L39
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps, useEffect, useState } from "react"
import { productData } from "@/types/product"
import { usePathname } from "next/navigation"
import { getProductById } from "@/actions/product"
import RelatedProducts from "../functional/RelatedProducts"
import ImagePreviwer from "../functional/ImagePreviwer"
import LoadMoreRelatedProducts from "../functional/LoadMoreRelatedProducts"

export async function Productview({productId,category}:{productId:string,category:string}) {

  const product:productData= await getProductById({id:productId})

  // console.log(product)

  // console.log(productId,category)

  // const [product,setProduct]=useState<productData | null>(null)
  // const [displayImg,setDisplayImg]=useState('')
  // const [availableColorsForSelectedSize,setAvailableColorsForSelectedSize]=useState<any[]>([])
  // const [dimensionsOfSelectedSize,setDimensionsOfSelectedSize]=useState('')

  // useEffect(()=>{
  //     const getProductDetails=async()=>{
  //         try {
             
  //             console.log(res)
  //             setProduct(res)
  //             setDisplayImg(res.images[0])
  //             setAvailableColorsForSelectedSize(res.availableSizesColors[0].colors)
  //             setDimensionsOfSelectedSize(res.availableSizesColors[0].dimensions)
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     }

  //     getProductDetails()
  // },[])

  if(!product){
      return null
  }

  return (
    <div className="md:grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-[1500px] px-4 mx-auto py-6">

      <ImagePreviwer images={product.images}/>

      <div className="grid gap-4 md:gap-10 items-start md:py-0 py-6">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <div className="text-4xl font-bold">{product.price}</div>
          </div>
          <div className="text-sm leading-loose text-muted-foreground">
            <p>
              Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This
              tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey,
              ensuring a soft and breathable fabric that feels gentle against the skin.
            </p>
            <p>
              The design of the Acme Prism T-Shirt is as striking as it is comfortable. The shirt features a unique
              prism-inspired pattern that adds a modern and eye-catching touch to your ensemble.
            </p>
          </div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="color" className="text-base">
              Color
            </Label>
            <RadioGroup id="color" defaultValue="black" className="flex items-center gap-2">
              {product.availableSizesColors.map((item)=>{
                return(
                <Label
                  htmlFor="color-black"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="color-black" value="black" />
                  {/* Black */}
                </Label>
                )
              })
              }
              {/* <Label
                htmlFor="color-white"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-white" value="white" />
                White
              </Label>
              <Label
                htmlFor="color-blue"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-blue" value="blue" />
                Blue
              </Label> */}
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup id="size" defaultValue="m" className="flex items-center gap-2">

            {product.availableSizesColors.map((item)=>{
              return(
                <Label
                  htmlFor={`size-${item.size}`}
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id={`size-${item.size}`} value={item.size} />
                  {/* XS */}
                  {item.size}
                </Label>
              )
            })}
              {/* <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-s" value="s" />
                S
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-m" value="m" />
                M
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-l" value="l" />
                L
              </Label>
              <Label
                htmlFor="size-xl"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-xl" value="xl" />
                XL
              </Label> */}
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg">Add to cart</Button>
        </form>
      </div>
      <div className="col-span-2 grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Product Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 text-sm leading-loose">
              <div>
                <h3 className="font-semibold">Material</h3>
                <p>60% combed ringspun cotton, 40% polyester jersey</p>
              </div>
              <div>
                <h3 className="font-semibold">Care Instructions</h3>
                <p>Machine wash cold, tumble dry low. Do not bleach.</p>
              </div>
              <div>
                <h3 className="font-semibold">Dimensions</h3>
                <p>Length: 27 inches, Chest: 42 inches</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold">Sarah Johnson</h3>
                      <time className="text-sm text-muted-foreground">2 days ago</time>
                    </div>
                    <div className="flex items-center gap-0.5 ml-auto">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                  <div className="text-sm leading-loose text-muted-foreground">
                    <p>
                      I've been experimenting with my Acme Prism T-Shirt for a few weeks now, and it's been a versatile
                      addition to my wardrobe. The fabric is soft and breathable, and the unique prism design adds a
                      modern touch to my outfits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold">Alex Smith</h3>
                      <time className="text-sm text-muted-foreground">3 weeks ago</time>
                    </div>
                    <div className="flex items-center gap-0.5 ml-auto">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                  <div className="text-sm leading-loose text-muted-foreground">
                    <p>
                      The Acme Prism T-Shirt is a great addition to my wardrobe. The fabric is soft and breathable, and
                      the unique pattern adds a touch of style to my casual outfits. I&apos;ve received several
                      compliments on it already.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Related Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Related Product 1"
                  width={300}
                  height={300}
                  className="aspect-square object-cover border rounded-lg"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Acme Hoodie</h3>
                  <p className="text-sm leading-none text-muted-foreground">Cozy and Stylish</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">$59.99</div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Related Product 2"
                  width={300}
                  height={300}
                  className="aspect-square object-cover border rounded-lg"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Acme Sweatpants</h3>
                  <p className="text-sm leading-none text-muted-foreground">Comfortable and Versatile</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">$39.99</div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Related Product 3"
                  width={300}
                  height={300}
                  className="aspect-square object-cover border rounded-lg"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Acme Baseball Cap</h3>
                  <p className="text-sm leading-none text-muted-foreground">Stylish and Practical</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">$19.99</div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div> */}
              <RelatedProducts _id={productId} category={category}/>

              <LoadMoreRelatedProducts category={category}/>
            </div>
          </CardContent>
        </Card>


      </div>
    </div>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
