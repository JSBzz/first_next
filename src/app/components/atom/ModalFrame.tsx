interface Props {
  children?: React.ReactNode;
}
function DefaultModalFrame({ children = "" }: Props) {
  return (
    <div className="fixed h-full w-full top-0 left-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bg-white opacity-100 w-96 h-[70%] rounded-xl">{children}</div>
    </div>
  );
}

const ModalFrame = Object.assign(DefaultModalFrame, {});
export default ModalFrame;
