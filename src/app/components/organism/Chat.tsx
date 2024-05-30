"use client";
import ChatCollection from "@/app/_hook/ChatCollection";
import ChatInput from "@/app/_hook/ChatInput";
import { useEffect, useRef, useState } from "react";

interface Chat {
  id: string;
  text: string;
  created_at: string;
}
export function Chat() {
  const [mounted, setMount] = useState(false);
  const scrollRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMount(true);
    if (scrollRef?.current && mounted) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
  if (!mounted) return <></>;
  return (
    <div className="border border-black rounded-md overflow-hidden bg-slate-100">
      <h1 className="border-b border-black p-1">Chat Messages</h1>
      <div ref={scrollRef} className=" overflow-y-scroll min-h-44 max-h-44 max-w-56">
        <ChatCollection scrollRef={scrollRef} />
      </div>
      <div>
        <ChatInput scrollRef={scrollRef} />
      </div>
    </div>
  );
}
