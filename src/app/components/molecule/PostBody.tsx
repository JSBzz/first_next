export default function PostBody({ contents }: any) {
  return (
    <div className="border border-black min-w-[60%] m-auto mt-5 flex max-w-[60%] rounded-md p-2 min-h-40">
      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </div>
  );
}
