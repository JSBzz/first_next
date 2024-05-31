import { useQuery } from "@tanstack/react-query";
import { CommentBlock } from "../molecule/CommentBlock";
import { CommentInput } from "../molecule/CommentInput";
import { CommentGetRequest } from "@/app/_hook/PostRequest";
import CustomImage from "../molecule/CustomImage";
import Loading from "../../styles/images/Loading.gif";

export default function Comment({ postId }: any) {
  const { data, isLoading } = useQuery({
    queryKey: ["comment", postId],
    queryFn: () => CommentGetRequest(postId),
  });

  return (
    <div>
      <CommentInput postId={postId} />
      {data?.length == 0 ? (
        <div className={"min-w-[60%] m-auto text-center max-w-[60%] mt-4 mb-4"}>NO COMMENT</div>
      ) : (
        data?.map((comment: any) => {
          return <CommentBlock key={comment?.id} comment={comment} />;
        })
      )}
    </div>
  );
}
