"use client";

import { signIn, signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const { status } = useSession();
  return (
    <div  className="flex justify-between items-center">
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          style={{
            margin:"20px 0px 0px 640px",
            fontWeight:"750",
            fontSize:"25px",cursor:"pointer"
          }}
        >
          Sign Out
        </button>
      ):(<></>)
    }
    </div>
  );
}
