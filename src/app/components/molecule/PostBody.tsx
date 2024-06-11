export default function PostBody({ contents }: any) {
  return (
    <div className="border border-black min-w-[300px] m-auto mt-2 flex w-2/4 rounded-md p-2 min-h-40">
      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </div>
  );
}
