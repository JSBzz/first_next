"use client";

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};
function DefaultButtonFrame({ children, className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

const ButtonFrame = Object.assign(DefaultButtonFrame, {});
export default ButtonFrame;
