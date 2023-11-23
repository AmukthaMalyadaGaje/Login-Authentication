"use client"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Welcome() {
    const { data: sessionData, status } = useSession();
    console.log(sessionData);
    console.log(status);
    const router = useRouter();
    let handleClick=async()=>{
        await router.push("/");
        console.log("after route back");
        await signOut({redirect:false});
        console.log("after signout");
        }
    return (
        <>
            <div className="ml-[500px] mt-7">
                Welcome , {sessionData?.user.name}
            </div>
            <button className='ml-[500px] mr-2 pt-3 pb-3 bg-[#151515] rounded cursor-pointer text-white w-[460px]' onClick={handleClick}> SignOut</button>

        </>
    )
}