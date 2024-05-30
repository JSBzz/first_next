"use client";
import Link from "next/link";
import Button from "../molecule/Button";

export default function Header() {
  return (
    <div className="w-full h-16 bg-slate-300">
      <Link href={"/"}>Home</Link>
      <span className="float-right">
        <Button.Authentication />
      </span>
      <span className="float-right">
        <Button.CallSignUpModal className="bg-slate-200">Sign-Up</Button.CallSignUpModal>
      </span>
    </div>
  );
}
