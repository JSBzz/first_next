export default function PostTitle({ title, writer, registDate }: any) {
  return (
    <div className="min-w-[60%] m-auto mt-2 justify-center flex max-w-[60%]   h-fit">
      <div className="grid grid-rows-3 border border-black container rounded-md p-1">
        <div className="text-center">{title}</div>
        <div className="grid grid-cols-2">
          <div className="border-t border-black p-1">writer : {writer}</div>
          <div className="border-t border-l border-black p-1">
            registDate : {new Date(registDate).toDateString()}
          </div>
        </div>
        <div className="border-t border-black">category</div>
      </div>
    </div>
  );
}
