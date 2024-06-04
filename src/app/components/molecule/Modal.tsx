"use client";
import { useEffect, useState } from "react";
import ModalFrame from "../atom/ModalFrame";
import Button from "./Button";
import Input from "./Input";
import CustomImage from "./CustomImage";
import { SignUpRequest } from "@/app/_hook/MemberRequest";
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
  const [errorMessage, setErrorMessage] = useState<any>({ type: "", message: "" });
  useEffect(() => {
    setErrorMessage({ type: "", message: "" });
  }, [showModal]);

  return (
    <DefaultModal showModal={showModal} setShowModal={setShowModal} title="Sign Up">
      <form
        onSubmit={async (e: any) => {
          e.preventDefault();
          let url = undefined;

          console.log("e.target.email: ", e.target.email.value);
          if (e.target.email.value.length < 4) {
            setErrorMessage({ type: "email", message: "이메일 길이 4 이상" });
            return;
          } else if (e.target.nickname.value.length < 2) {
            setErrorMessage({ type: "nickname", message: "닉네임 길이 2 이상" });
            return;
          } else if (e.target.password.value.length < 4) {
            setErrorMessage({ type: "password", message: "비밀번호 길이 4 이상" });
            return;
          } else if (e.target.password.value != e.target.passwordCheck.value) {
            setErrorMessage({ type: "password", message: "비밀번호 불일치" });
            return;
          } else {
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
          }
        }}
      >
        <div className=" h-fit w-fit mt-14 mr-4 ml-4 z-50 justify-center m-auto">
          <div className="m-auto">
            <Input.Label id="email" labelName="email" />
            <span className="text-red-500">
              {errorMessage.type == "email" && errorMessage.message}
            </span>
            <Input.Label id="nickname" labelName="nickname" />
            <span className="text-red-500">
              {errorMessage.type == "nickname" && errorMessage.message}
            </span>
            <Input.Label id="password" labelName="password" type="password" />
            <span className="text-red-500">
              {errorMessage.type == "password" && errorMessage.message}
            </span>
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
