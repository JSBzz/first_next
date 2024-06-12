"use client";

import { useState } from "react";
import ButtonFrame from "../atom/ButtonFrame";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentPostRequest } from "@/app/_hook/PostRequest";

export function CommentInput({ postId }: { postId: number }) {
  const queryClient = useQueryClient();
  let isGuest = true;
  const session = useSession();
  const [text, setText] = useState("");
  const { mutate } = useMutation({
    mutationKey: ["comment", postId, session.data?.user?.id ?? 0, text],
    mutationFn: () =>
      CommentPostRequest(postId, text.replace("\n", "<br/>"), session.data?.user.id ?? 0),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", postId] });
      setText("");
    },
  });
  if (session.data?.user) {
    isGuest = false;
  }
  return (
    <div
      className={
        "min-w-[300px] m-auto justify-center flex w-2/4 h-20 rounded-md overflow-hidden border border-gray-500"
      }
    >
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className={`max-w-[90%] w-full ${isGuest && "bg-slate-200"}`}
        disabled={isGuest}
        placeholder={isGuest ? "로그인해야함" : ""}
      />
      <ButtonFrame onClick={mutate} className="min-w-[10%] bg-slate-300 border" disabled={isGuest}>
        INPUT
      </ButtonFrame>
    </div>
  );
}
