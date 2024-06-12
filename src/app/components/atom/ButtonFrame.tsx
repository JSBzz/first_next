"use client";

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};
function DefaultButtonFrame({ children, className, onClick, disabled = false }: Props) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

const ButtonFrame = Object.assign(DefaultButtonFrame, {});
export default ButtonFrame;
