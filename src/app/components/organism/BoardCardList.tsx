"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import BoardCard from "../molecule/BoardCard";
import { PostGetPerPageRequest, PostGetRequest } from "@/app/_hook/PostRequest";
import { useEffect, useState } from "react";
import noImage from "../../styles/images/noImage.jpg";
import Link from "next/link";

export default function BoardCardList() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const { data, isLoading, status, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["post", page],

    queryFn: async ({ pageParam = 0 }) => {
      const response = await PostGetPerPageRequest(limit, pageParam);
      return response;
    },
    getNextPageParam: (lastPages, pages) => {
      const totalPage = Math.ceil(lastPages[0] / limit);
      const lastId = lastPages[1][lastPages[1].length - 1]?.id;
      return page < totalPage ? lastId : undefined;
    },

    initialPageParam: 0,
  });
  console.log("data: ", data);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight + 10 >= scrollHeight) {
        fetchNextPage();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (status === "pending") return <>Loading</>;
  const imgSrcRegex = /<img[^>]+src="([^">]+)"/i;

  return (
    <div>
      <select
        defaultValue={10}
        onChange={(e) => {
          setLimit(Number(e.target.value));
        }}
      >
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
      <Link href={"/post/write"}> Write </Link>
      {data?.pages.map((posts: any) => {
        return posts[1].map((post: any) => {
          let thumbnail = noImage;
          const img = post?.contents?.match(imgSrcRegex);
          if (img != undefined) thumbnail = img[1];
          return (
            <div key={post?.id}>
              <BoardCard
                title={post?.title}
                contents={post?.contents?.replace(/(<([^>]+)>)/gi, "")}
                thumbnail={thumbnail}
                id={post?.id}
              />
            </div>
          );
        });
      })}
      {isFetching && <div>Loading..</div>}
      {data?.pages[data?.pages.length - 1][1].length == 0 && (
        <div className="mb-2 font-bold text-center">End Of Post</div>
      )}
    </div>
  );
}
