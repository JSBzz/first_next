"use client";

import { useState } from "react";
import ButtonFrame from "../atom/ButtonFrame";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentPostRequest } from "@/app/_hook/PostRequest";

export function CommentInput({ postId }: { postId: number }) {
  const queryClient = useQueryClient();

  const session = useSession();
  const [text, setText] = useState("");
  const { mutate } = useMutation({
    mutationKey: ["comment", postId, session.data?.user?.id ?? 0, text],
    mutationFn: () => CommentPostRequest(postId, text, session.data?.user.id ?? 0),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", postId] });
      setText("");
    },
  });
  return (
    <div
      className={
        "min-w-[60%] m-auto justify-center flex max-w-[60%] h-20 rounded-md overflow-hidden border border-gray-500"
      }
    >
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className="max-w-[90%] w-full "
      />
      <ButtonFrame onClick={mutate} className="min-w-[10%] bg-slate-300 border">
        INPUT
      </ButtonFrame>
    </div>
  );
}
