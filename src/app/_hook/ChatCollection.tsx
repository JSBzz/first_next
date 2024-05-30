"use client";
import React, { useEffect, useRef, useState } from "react";
import { collection, onSnapshot, orderBy, query, limit } from "@firebase/firestore";
import db from "../_lib/firebase/fire-config";

/**
 * @description
 * 채팅 목록 컴포넌트
 * firebase-firestore에서 채팅 데이터 목록을 보여줍니다.
 */
const ChatCollection = ({ scrollRef }: any) => {
  // 채팅 목록 데이터
  const [chatData, setChatData] = useState<any[]>([]);

  function GetChatList(cb: (data: any[]) => void) {
    const q = query(collection(db, "chat"), orderBy("created_at"), limit(100));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      cb(data);
    });

    return unsubscribe;
  }

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chatData]);

  useEffect(() => {
    const unsubscribe = GetChatList((data) => setChatData(data));
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="bg-white z-30">
      {chatData.map((chat, index) => (
        <p className="ml-2" key={index}>
          <span className="font-bold">{chat.nickname}</span> : {chat.text}
        </p>
      ))}
    </div>
  );
};

export default ChatCollection;
