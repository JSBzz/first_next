"use client";
import { useInfiniteQuery, useQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import BoardCard from "../molecule/BoardCard";
import { PostGetPerPageRequest, PostGetRequest } from "@/app/_hook/PostRequest";
import { Suspense, useEffect, useState } from "react";
import noImage from "../../styles/images/noImage.jpg";
import Link from "next/link";
import CustomImage from "../molecule/CustomImage";
import Loading from "../../styles/images/loading.gif";

export default function BoardCardList() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);

  const { data, isLoading, status, fetchNextPage, isFetching } = useSuspenseInfiniteQuery({
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

  const imgSrcRegex = /<img[^>]+src="([^">]+)"/i;

  return (
    <Suspense fallback={<CustomImage.Loading />}>
      <div>
        <div className="float-right border border-gray-400 bg-gray-200 rounded-md m-2 p-1 hover:bg-gray-400">
          <Link href={"/post/write"}> Write-Post </Link>
        </div>
        <br />
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
                  created_at={post?.created_at}
                />
              </div>
            );
          });
        })}
        {isFetching && (
          <div className="flex m-auto justify-center">
            <CustomImage src={Loading} />
          </div>
        )}
        {data?.pages[data?.pages.length - 1][1].length == 0 && (
          <div className="mb-2 font-bold text-center">End Of Post</div>
        )}
      </div>
    </Suspense>
  );
}
