"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TipTapMenu } from "./TiptapMenu";
import Button from "../molecule/Button";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { useState } from "react";
import { uploadHandler } from "@/app/_utils/UploadHandler";
import { PostPostRequest } from "@/app/_hook/PostRequest";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Tiptap = () => {
  const session = useSession();
  const router = useRouter();
  const [error, setError] = useState({ type: "", message: "" });
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<{ base64: any; file: any }[]>([]);
  Image.configure({
    allowBase64: true,
  });
  const editor = useEditor({
    extensions: [StarterKit, Image, ImageResize],
    content: "",
  });
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (title == "") {
            setError({ type: "title", message: "타이틀을 입력 해 주셍" });
            return;
          } else if (editor?.isEmpty) {
            setError({ type: "content", message: "콘텐츠를 입력 해 주셍" });
            return;
          } else {
            let uploadPostHtml = editor?.getHTML()!;
            for (const f of file) {
              let url: undefined | string | null = "";
              const isInclude = uploadPostHtml.includes(f.base64);
              if (isInclude) {
                url = await uploadHandler(f.file);
                if (url) {
                  uploadPostHtml = uploadPostHtml.replace(f.base64, url);
                }
              }
            }
            setFile([]);
            setTitle("");
            const response = await PostPostRequest({
              title: title,
              contents: uploadPostHtml,
              userId: session.data?.user.id!,
            }).then((response) => {
              router.push(`/post/${response.id}`);
            });
          }
        }}
      >
        <div className="w-[100vh] min-h-[80vh] max-h-[80vh] m-auto">
          TITLE
          {"   "}
          <span className="text-red-500">{error.type == "title" && error.message}</span>
          <input
            type="text"
            className=" w-[100vh] border border-black"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TipTapMenu editor={editor} setFile={setFile} files={file} />
          <span className="text-red-500">{error.type == "content" && error.message}</span>
          <div className="overflow-y-scroll min-h-[70vh] max-h-[70vh] border border-black p-2">
            <EditorContent editor={editor} />
          </div>
          <div className="float-right">
            <Button>등록</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Tiptap;
