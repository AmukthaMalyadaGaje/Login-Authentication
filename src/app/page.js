"use client"
import Image from 'next/image'
import { SessionProvider, signIn, signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { data: sessionData, status } = useSession();
  console.log(sessionData);
  console.log(status);
  const router = useRouter();
  let handleClick=()=>{
    signIn('google');
    // router.push("/welcome")
  }
  if(sessionData?.user?.name){
    return (
      <div>{router.push("/welcome")}</div>
    )
  }
  return (
    <>
      <div>
        <div className='h-[420px] bg-white mx-6 rounded-lg mt-11 ml-[500px] w-[500px] '>
          <div className='flex flex-col' >
            <p className=' pl-3 text-black text-center font-semibold text-[30px] pt-6 pb-6'>Sign In with</p>
            <button className='ml-4 mr-2 pt-3 pb-3 w-[460px] bg-[#151515] rounded cursor-pointer mb-4 text-white' onClick={handleClick}>Login with Google</button>
          </div>
        </div>
      </div>
    </>
  )
}
 {/* <div className='px-4 bg-white h-[95px] sticky top-0'>
          <ul className='px-7 flex flex-row justify-between items-center text-[37px]'>
            <ul className='flex flex-row  items-center text-[20px] text-black font-extrabold'>
              <li className='pr-4 pt-7 pl-7 text-black'>{sessionData?.user?.name}</li>
              <li className='pr-4 pt-7 pl-7'></li>
            </ul>
          </ul>
        </div> */}