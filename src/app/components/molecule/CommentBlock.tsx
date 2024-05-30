export function CommentBlock({ comment }: any) {
  return (
    <div className="min-w-[60%] m-auto justify-center max-w-[60%] min-h-20 border border-gray-400 mt-4 grid-cols-2 rounded-md">
      <div className="border-gray-400 border-b grid-cols-2 ml-1 mr-1">
        <span>{comment.user.nickname ?? "GUEST"}</span>
        <span className="float-right">{comment.created_at}</span>
      </div>
      <p className="p-1">{comment.contents}</p>
      <div className="float-right text-green-600 mr-2">{comment.reply_count}</div>
    </div>
  );
}
