/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yiiZrMzNRNF
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Tenor_Sans } from 'next/font/google'

tenor_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useEffect, JSX, SVGProps } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function Landingpage({userData:user}:{userData:any}) {
  // const [user, setUser] = useState<any>(null)
  const [cart, setCart] = useState<any>([])
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch("YOUR_API_URL")
  //     const userData = await response.json()
  //     setUser(userData)
  //   }
  //   fetchUser()
  // }, [])
  const addToCart = (product: { id: number; name: string; description: string; price: number; image: string }) => {
    setCart([...cart, product])
  }
  const removeFromCart = (product: { id: any }) => {
    setCart(cart.filter((item: { id: any }) => item.id !== product.id))
  }
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="size-6" />
          <span className="sr-only">Acme Clothing</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            New
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sale
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
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
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Logout</span>
                  </Link>
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
        </nav>
      </header>
      <main className="flex-1">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div
                className="w-full h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/placeholder.svg)" }}
              >
                <div className="container h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                      Elevate Your Style
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      Discover our latest collection of premium clothing and accessories.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="w-full h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/placeholder.svg)" }}
              >
                <div className="container h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                      Discover Our Latest Collection
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      Explore our newest selection of premium clothing and accessories.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero Product"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Elevate Your Style
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our latest collection of premium clothing and accessories.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Products</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Curated Collection</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our selection of premium clothing and accessories that will elevate your style.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  id: 1,
                  name: "Classic Tee",
                  description: "Timeless and versatile",
                  price: 29.99,
                  image: "/placeholder.svg",
                },
                {
                  id: 2,
                  name: "Linen Shirt",
                  description: "Breathable and stylish",
                  price: 49.99,
                  image: "/placeholder.svg",
                },
                {
                  id: 3,
                  name: "Denim Jeans",
                  description: "Timeless and durable",
                  price: 59.99,
                  image: "/placeholder.svg",
                },
                {
                  id: 4,
                  name: "Silk Scarf",
                  description: "Luxurious and versatile",
                  price: 29.99,
                  image: "/placeholder.svg",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
                >
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt={product.name}
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <h4 className="text-lg font-semibold md:text-xl">${product.price}</h4>
                    <Button variant="outline" className="w-full mt-2" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">New Arrivals</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Latest Collection</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our newest selection of premium clothing and accessories.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  id: 5,
                  name: "Cashmere Sweater",
                  description: "Luxurious and cozy",
                  price: 99.99,
                  image: "/placeholder.svg",
                },
                {
                  id: 6,
                  name: "Wool Coat",
                  description: "Warm and stylish",
                  price: 149.99,
                  image: "/placeholder.svg",
                },
                {
                  id: 7,
                  name: "Leather Backpack",
                  description: "Durable and fashionable",
                  price: 79.99,
                  image: "/placeholder.svg",
                },
                {
                  id: 8,
                  name: "Silk Tie",
                  description: "Elegant and sophisticated",
                  price: 39.99,
                  image: "/placeholder.svg",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
                >
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Product</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt={product.name}
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <h4 className="text-lg font-semibold md:text-xl">${product.price}</h4>
                    <Button variant="outline" className="w-full mt-2" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {cart.length > 0 && (
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2" />
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
