
import { getUserData } from "@/actions/auth";
import { Homepage } from "@/components/component/homepage";
import { Landingpage } from "@/components/component/landingpage";
// import { useRouter } from "next/navigation";

export default async function Home() {
  // const {userData}=useAuth()
  // const router=useRouter()
  const session=await getUserData()
  console.log(session)

  return (
    <>

    <Homepage user={session}/>
    {/* <Landingpage userData={session}/> */}
    </>
  );
}
