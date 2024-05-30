"use client";

type Props = {
  onChange?: (e: any) => void;
  value?: any;
  className?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  useDefaultStyle?: boolean;
  accept?: string;
  name?: string;
};
function DefaultInput({
  value,
  className,
  onChange,
  type,
  placeholder,
  id,
  useDefaultStyle = true,
  accept,
  name,
}: Props) {
  const defaultStyle = "border-gray-400 border rounded-lg p-1 pl-2";
  return (
    <input
      type={type}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      className={useDefaultStyle ? defaultStyle + className : className}
      value={value}
      accept={accept}
      name={name}
    />
  );
}

const InputFrame = Object.assign(DefaultInput, {});
export default InputFrame;
