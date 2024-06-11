import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { CommentBlock } from "../molecule/CommentBlock";
import { CommentInput } from "../molecule/CommentInput";
import { CommentGetRequest } from "@/app/_hook/PostRequest";
import { Suspense } from "react";
import CustomImage from "../molecule/CustomImage";

export default function Comment({ postId }: any) {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["comment", postId],
    queryFn: () => CommentGetRequest(postId),
  });

  return (
    <div>
      <Suspense fallback={<CustomImage.Loading />}>
        <CommentInput postId={postId} />
        {data?.length == 0 ? (
          <div className={"min-w-[300px] m-auto text-center max-w-[60%] mt-4 mb-4"}>NO COMMENT</div>
        ) : (
          data?.map((comment: any) => {
            return <CommentBlock key={comment?.id} comment={comment} />;
          })
        )}
      </Suspense>
    </div>
  );
}
