"use client";
import Link from "next/link";
import Button from "../molecule/Button";

export default function Header() {
  return (
    <div className="w-full text-center min-h-16 flex items-center">
      <div className="w-3/5 min-h-16 bg-slate-300 rounded-b-lg m-auto items-center">
        <div className="mt-4">
          {/* <div className="font-bold text-3xl"> */}
          <Link href={"/"}>
            <span className="font-bold text-2xl">Home</span>
          </Link>
          {"          "}
          <Button.CallSignUpModal className="bg-slate-200">
            <span className="font-bold text-2xl">Sign-Up</span>
          </Button.CallSignUpModal>
          {"          "}
          <Button.Authentication />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
