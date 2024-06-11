"use client";
import Link from "next/link";
import Button from "../molecule/Button";

export default function Header() {
  return (
    <div className="w-full text-center min-h-16 flex items-center">
      <div className="w-2/4 min-h-16 bg-slate-300 rounded-b-lg m-auto items-center min-w-[300px]">
        <div className="mt-4">
          <Link href={"/"}>
            <span className="font-bold text-2xl">Home</span>
          </Link>
          <Button.CallSignUpModal className="bg-slate-200">
            <span className="font-bold text-2xl mr-5 ml-5">SignUp</span>
          </Button.CallSignUpModal>
          <Button.Authentication />
        </div>
      </div>
    </div>
  );
}
