"use client";
import React, { useRef, useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import db from "../_lib/firebase/fire-config";
import { useSession } from "next-auth/react";

/**
 * @description
 * 채팅 작성 인풋 컴포넌트입니다.
 */
const ChatInput = ({ scrollRef }: any) => {
  // 채팅 인풋 값
  const [message, setMessage] = useState("");
  const session = useSession();
  const formRef = useRef<HTMLFormElement>(null);

  // 채팅 메시지를 DB에 전송하고 전송되면 메시지 인풋 값을 초기화해줍니다.
  async function OnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await addDoc(collection(db, "chat"), {
      nickname: session.data?.user.nickname ?? "Guest",
      text: message,
      created_at: new Date(),
    });
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    setMessage("");
  }
  return (
    <div className="bg-white z-50">
      <form onSubmit={OnSubmit} ref={formRef}>
        <div className="h-14 top grid grid-cols-[70%_30%]">
          <textarea
            name="chat"
            id="chat"
            placeholder="Send your Message"
            className="border-t border-black h-full "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                if (formRef?.current) {
                  formRef.current.requestSubmit();
                }
              }
            }}
          />
          <button className="col-span-1 border-t border-l border-black">전송</button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
