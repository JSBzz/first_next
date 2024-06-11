export default function PostTitle({ title, writer, registDate }: any) {
  return (
    <div className="min-w-[300px] m-auto mt-2 justify-center flex w-2/4 h-fit">
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
