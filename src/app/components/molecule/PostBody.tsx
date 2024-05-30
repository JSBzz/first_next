export default function PostBody({ contents }: any) {
  return (
    <div className="border border-black min-w-[60%] m-auto mt-2 justify-center flex max-w-[60%] rounded-md p-2">
      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </div>
  );
}
