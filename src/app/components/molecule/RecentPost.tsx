"use client";

import { PostRecentGetRequest } from "@/app/_hook/PostRequest";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export function RecentPost({ postId }: any) {
  const { data, isLoading } = useQuery({
    queryKey: ["post-recent", postId],
    queryFn: () => PostRecentGetRequest(postId),
  });
  if (isLoading) return <></>;
  return (
    <div className="min-w-[60%] m-auto mt-2 justify-center max-w-[60%] rounded-md p-2 mb-2">
      <ul className="list-none">
        {data?.previous && (
          <li key={data.previous.id}>
            <Link href={`/post/${data.previous.id}`}>- 이전 {data.previous.title}</Link>
          </li>
        )}
        {data?.now && (
          <li key={data.now.id} className="font-bold">
            - 현재 {data.now.title}
          </li>
        )}
        {data?.next && (
          <li key={data.next.id}>
            <Link href={`/post/${data.next.id}`}>- 다음 {data.next.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
