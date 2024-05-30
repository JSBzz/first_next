"use client";
import { PostDetailGetRequest } from "@/app/_hook/PostRequest";
import { CommentInput } from "@/app/components/molecule/CommentInput";
import PostBody from "@/app/components/molecule/PostBody";
import PostTitle from "@/app/components/molecule/PostTitle";
import { useQuery } from "@tanstack/react-query";

export default function PostDetail({ params: { id } }: { params: { id: number } }) {
  const { data, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => PostDetailGetRequest(id),
  });
  if (isLoading) return <></>;
  return (
    <>
      <PostTitle
        title={data?.title}
        writer={data?.user?.nickname}
        registDate={data?.created_at}
      ></PostTitle>
      <PostBody contents={data.contents}></PostBody>;
      <CommentInput />
    </>
  );
}
