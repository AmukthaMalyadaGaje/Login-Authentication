"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function Login() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col" style={{
        justifyContent:"center",
        alignItems:"center",
        width:"400px",
        height:"400px",
      }}>
        <p style={{
          fontSize: "28px",
          fontWeight: "670",
          textAlign:"center",
          paddingBottom:"30px"
        }}>Welcome!!</p>
        <Image
          src={session?.user?.image}
          width={200}
          height={150}
          style={{
            borderRadius: "13px",
            margin: "0px 0px 50px 100px"
          }}
        />
        <div style={{
          fontSize: "24px",
          fontWeight: "670",
          textAlign:"center"
      }}>
          {session?.user?.name}
        </div>
        <div style={{
          fontSize: "24px",
          fontWeight: "670",
          textAlign:"center",
          paddingTop:"20px"
        }}>
          {session?.user?.email}
        </div>


      </div>
    );
  } else {
    return <SignInBtn />;
  }
}