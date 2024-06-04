"use client";
import Link from "next/link";
import Button from "../molecule/Button";

export default function Header() {
  return (
    <div className="w-full text-center">
      <div className="w-3/5 h-16 bg-slate-300 rounded-b-lg m-auto ">
        {/* <div className="font-bold text-3xl"> */}
        <Link href={"/"}>Home</Link>
        <Button.CallSignUpModal className="bg-slate-200">Sign-Up</Button.CallSignUpModal>
        <Button.Authentication />
        {/* </div> */}
      </div>
    </div>
  );
}
