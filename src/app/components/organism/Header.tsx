"use client";
import Link from "next/link";
import Button from "../molecule/Button";

export default function Header() {
  return (
    <div className="w-full">
      <div className="w-3/5 h-16 bg-slate-300 rounded-b-lg m-auto mb-2">
        <div className="text-center align-middle mt-0">
          <Link href={"/"}>Home</Link>
          <Button.Authentication />
          <Button.CallSignUpModal className="bg-slate-200">Sign-Up</Button.CallSignUpModal>
        </div>
      </div>
    </div>
  );
}
