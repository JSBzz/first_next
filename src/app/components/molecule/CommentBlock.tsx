import CustomImage from "./CustomImage";

export function CommentBlock({ comment }: any) {
  console.log("comment: ", comment);
  return (
    <div className="min-w-[300px] m-auto justify-center w-2/4 min-h-20 border border-gray-400 mt-4 grid-cols-2 rounded-md p-1">
      <div className="border-gray-400 border-b ml-1 mr-1">
        <div className="flex">
          <CustomImage.User src={comment?.user?.image} type={"text"} />
          <span className="ml-2">{comment.user.nickname ?? "GUEST"}</span>
          <div className="w-full">
            <div className="float-right">{comment.created_at}</div>
          </div>
        </div>
      </div>
      <p className="p-1" dangerouslySetInnerHTML={{ __html: comment.contents }} />
      <div className="float-right text-green-600 mr-2">{comment.reply_count}</div>
    </div>
  );
}
