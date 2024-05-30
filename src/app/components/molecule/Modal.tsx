"use client";
import { useState } from "react";
import ModalFrame from "../atom/ModalFrame";
import Button from "./Button";
import Input from "./Input";
import CustomImage from "./CustomImage";
import { SignUpRequest } from "@/app/_hook/memberRequest";
import { useRouter } from "next/navigation";
import { uploadHandler } from "@/app/_utils/UploadHandler";

interface Props {
  children?: React.ReactNode;
  showModal?: boolean;
  setShowModal?: any;
  title?: string;
}
function DefaultModal({ children, showModal, setShowModal, title = "" }: Props) {
  if (!showModal) return <></>;
  return (
    <ModalFrame>
      <div className="absolute h-11 w-full rounded-t-xl bg-slate-300">
        <div className="mr-4 mt-2 ml-4 justify-center ">
          <span className="float-left font-bold text-xl ">{title}</span>
          <span className="float-right">
            <Button.Toggle setStatus={setShowModal} status={showModal}>
              X
            </Button.Toggle>
          </span>
        </div>
      </div>
      {children}
    </ModalFrame>
  );
}
function SignUpModal({ children, showModal, setShowModal }: Props) {
  const [image, setImage] = useState<any>({ file: "", imageUrl: "" });

  return (
    <DefaultModal showModal={showModal} setShowModal={setShowModal} title="Sign Up">
      <form
        onSubmit={async (e: any) => {
          e.preventDefault();
          let url = undefined;
          if (image?.file) url = await uploadHandler(image?.file);
          const requestBody = {
            email: e.target.email.value,
            nickname: e.target.nickname.value,
            password: e.target.password.value,
            passwordCheck: e.target.passwordCheck.value,
            providerType: "CREDENTIAL",
            image: url!,
          };
          const response = await SignUpRequest(requestBody);
          setShowModal(false);
        }}
      >
        <div className=" h-5/6 mt-14 mr-4 ml-4 flex">
          <div className="m-auto">
            <Input.Label id="email" labelName="email" />
            <Input.Label id="nickname" labelName="nickname" />
            <Input.Label id="password" labelName="password" type="password" />
            <Input.Label id="passwordCheck" labelName="passwordCheck" type="password" />
          </div>
        </div>
        <CustomImage.User src={image.imageUrl} />
        <div className="mt-4 justify-center flex">
          <Input.Image setImage={setImage} />
        </div>
        <div className="mt-2 justify-center flex ">
          <Button className="bg-blue-100 p-2 rounded-xl">Sign Up</Button>
        </div>
      </form>
    </DefaultModal>
  );
}

const Modal = Object.assign(DefaultModal, {
  SignUp: SignUpModal,
});
export default Modal;
