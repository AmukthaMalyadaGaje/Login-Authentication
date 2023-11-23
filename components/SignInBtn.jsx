"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  return (
    <div style={{ backgroundColor: "#9a9cb9", borderBlockColor:"blueviolet",border:"solid",borderStyle:"groove", width: "440px", paddingTop: "30px", borderRadius: "8px",height:"290px",opacity:"0.9" }} className="flex flex-col bg-black items-center">
      <div style={{ marginLeft: "100px",fontSize:"20px",fontWeight:"750",color:"#f6f6f8",paddingBottom:"10px" }} >Sign In using</div>
      <div style={{ display: "flex", justifyContent: "space-evenly", borderRadius: "6px", padding: "10px 0px 10px 0px", margin: "10px 30px 20px 40px",cursor:"pointer", borderColor: "white", border: "solid", width: "350px" }} onClick={() => signIn("google")} >
        <Image style={{ marginLeft: "30px", borderRadius: "8px" }}  src={require('../public/google.png')} width={40} height={39} />
        <p style={{fontSize:"19px",fontWeight:"700",color:"#f6f6f8"}}>Login using Google</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", borderRadius: "6px", padding: "10px 0px 10px 0px", margin: "10px 30px 10px 40px", borderColor: "white", border: "solid", width: "350px" }} >
        <Image style={{ marginLeft: "30px", borderRadius: "8px" }} onClick={() => signIn("github")} src={require('../public/github.png')} width={40} height={39} />
        <p style={{fontSize:"19px",fontWeight:"700",color:"#f6f6f8"}}>Login using Github</p>
      </div>

    </div>
  );
}

{/* <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    ><span className="bg-blue-500 text-white px-4 py-3">Sign In Using</span>
    </button> */}