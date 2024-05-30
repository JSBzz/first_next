"use client";

import { useState } from "react";
import Input from "./Input";
import InputFrame from "../atom/InputFrame";
import ButtonFrame from "../atom/ButtonFrame";

export function CommentInput() {
  const [text, setText] = useState("");
  return (
    <div className={"min-w-[60%] m-auto justify-center flex max-w-[60%] h-20"}>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className="max-w-[90%] w-full border-gray-400 border"
      />
      <ButtonFrame className="min-w-[10%] bg-slate-300 border-gray-400 border">INPUT</ButtonFrame>
    </div>
  );
}
