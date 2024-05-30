"use client";

import { Fragment, useState } from "react";
import ButtonFrame from "../atom/ButtonFrame";
import InputFrame from "../atom/InputFrame";
import CustomImage from "./CustomImage";
import UploadImage from "../../styles/images/upload_image.png";

type Props = {
  onChange?: () => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  type?: string;
  accept?: string;
  name?: string;
};
type ToggleProps = {
  id: string;
  labelName: string;
  type?: string;
  name?: string;
};

function DefaultInput({ className, id, type = "text", accept = "", name = "" }: Props) {
  const [value, setValue] = useState("");
  return (
    <InputFrame
      className={className}
      onChange={(e: any) => setValue(e.target.value)}
      value={value}
      id={id}
      type={type}
      accept={accept}
      name={name}
    ></InputFrame>
  );
}

function ImageInput({ setImage }: any) {
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      URL.createObjectURL(file);
      setImage({ file: file, imageUrl: URL.createObjectURL(file) });
    }
  };
  return (
    <Fragment>
      <label htmlFor="file">
        <CustomImage src={UploadImage} />
      </label>
      <input type="file" id="file" accept="image/*" onChange={handleImageChange} hidden />
    </Fragment>
  );
}

function LabelInput({ id, labelName, type }: ToggleProps) {
  return (
    <Fragment>
      <div className="mt-2">
        <label htmlFor={id}>{labelName}</label>
        <br />
        <DefaultInput name={id} type={type} id={id} />
        <br />
      </div>
    </Fragment>
  );
}

const Input = Object.assign(DefaultInput, {
  Label: LabelInput,
  Image: ImageInput,
});
export default Input;
