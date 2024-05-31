export default function PostTitle({ title, writer, registDate }: any) {
  return (
    <div className="min-w-[60%] m-auto mt-2 justify-center flex max-w-[60%]   h-fit">
      <div className="grid grid-rows-2 border border-black container rounded-md p-1">
        <div className="text-center font-bold text-4xl">{title}</div>
        <div className="grid grid-cols-2 mt-2">
          <div className="float-right ">
            {registDate && "registDate : " + new Date(registDate).toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
