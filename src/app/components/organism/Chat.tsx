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
    <div className="border border-black rounded-md overflow-hidden bg-white z-10">
      <div className="bg-slate-200 text-center">CHAT</div>
      <div ref={scrollRef} className=" overflow-y-scroll max-w-56 max-h-28">
        <ChatCollection scrollRef={scrollRef} />
      </div>
      <div>
        <ChatInput scrollRef={scrollRef} />
      </div>
    </div>
  );
}
