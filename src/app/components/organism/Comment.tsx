import { useQuery } from "@tanstack/react-query";
import { CommentBlock } from "../molecule/CommentBlock";
import { CommentInput } from "../molecule/CommentInput";
import { CommentGetRequest } from "@/app/_hook/PostRequest";

export default function Comment({ postId }: any) {
  const { data, isLoading } = useQuery({
    queryKey: ["comment", postId],
    queryFn: () => CommentGetRequest(postId),
  });
  if (isLoading) return <></>;
  return (
    <div>
      <CommentInput postId={postId} />
      {data.map((comment: any) => {
        return <CommentBlock key={comment?.id} comment={comment} />;
      })}
    </div>
  );
}
