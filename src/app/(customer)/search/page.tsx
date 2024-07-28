
import { Productpage } from "@/components/component/productpage";
import { useSearchParams } from "next/navigation"

interface pageProps{
    searchParams?: { [key: string]: string | string[] | undefined };
}

export default function page({searchParams}:pageProps ){
    console.log(searchParams)
    return(
        <div className=''>
            <Productpage/>
        </div>
    )
}