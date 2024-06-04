"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import loginImage from "../../styles/images/login.png";
import logoutImage from "../../styles/images/logout.png";
import { useState } from "react";
import ButtonFrame from "../atom/ButtonFrame";
import Modal from "./Modal";
import CustomImage from "./CustomImage";
import { useUserSession } from "@/app/_utils/clientUtils";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  className?: string;
};
type ToggleProps = {
  children: React.ReactNode;
  status: boolean;
  setStatus: any;
};

function DefaultButton({ children, className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function ToggleButton({ children, status, setStatus }: ToggleProps) {
  return (
    <ButtonFrame
      onClick={() => {
        setStatus(!status);
      }}
    >
      {children}
    </ButtonFrame>
  );
}

function AuthenticationButton() {
  const { data: session } = useSession();
  const userImage = session?.user?.image;

  return (
    <>
      {session ? (
        <Button onClick={() => signOut()}>
          <span className="font-bold text-2xl">Sign Out</span>
        </Button>
      ) : (
        <Button onClick={() => signIn()}>
          <span className="font-bold text-2xl">Sign In</span>
        </Button>
      )}
    </>
  );
}

function CallDefaultModalButton({ className = "", children }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {children} TEST
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {""}
      </Modal>
    </div>
  );
}

function CallSignUpModalButton({ children = "Sign Up" }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <span>
      <Button.Toggle setStatus={setShowModal} status={showModal}>
        {children}
      </Button.Toggle>
      <Modal.SignUp showModal={showModal} setShowModal={setShowModal} />
    </span>
  );
}
const Button = Object.assign(DefaultButton, {
  Authentication: AuthenticationButton,
  CallSignUpModal: CallSignUpModalButton,
  Toggle: ToggleButton,
});
export default Button;
