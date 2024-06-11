"use client";
import { PostDetailGetRequest } from "@/app/_hook/PostRequest";
import CustomImage from "@/app/components/molecule/CustomImage";
import PostBody from "@/app/components/molecule/PostBody";
import PostTitle from "@/app/components/molecule/PostTitle";
import { RecentPost } from "@/app/components/molecule/RecentPost";
import Comment from "@/app/components/organism/Comment";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export default function PostDetail({ params: { id } }: { params: { id: number } }) {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["post", id],
    queryFn: () => PostDetailGetRequest(id),
  });
  return (
    <div className="w-full">
      <div className="min-w-[300px] w-3/5 items-center justify-center object-center text-center m-auto mt-8">
        <Suspense fallback={<CustomImage.Loading />}>
          <PostTitle
            title={data?.title}
            writer={data?.user?.nickname}
            registDate={data?.created_at}
          />
          <PostBody contents={data?.contents} userInfo={data?.user} />
          <div className="mt-4">
            <Comment postId={id} />
          </div>
          <RecentPost postId={id} />
        </Suspense>
      </div>
    </div>
  );
}
