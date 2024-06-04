"use client";
import { EditorContentProps } from "@tiptap/react";
import { MdFormatBold, MdUploadFile } from "react-icons/md";
export const TipTapMenu = ({
  editor,
  setFile,
  files,
}: {
  editor: any;
  setFile: any;
  files: any;
}) => {
  if (!editor) return null;
  return (
    <div className="mt-2 mb-2">
      <form onSubmit={() => {}} className="flex">
        <MdFormatBold
          size={20}
          cursor={"pointer"}
          onClick={() => editor.chain().focus().toggleBold().run()}
          style={{ color: editor.isActive("bold") ? "orange" : "black" }}
        />
        <input
          id="upload"
          type="file"
          onChange={async (e) => {
            const file = e.target.files![0];
            if (editor) {
              const image = `data:${file.type};base64,${Buffer.from(
                await file.arrayBuffer()
              ).toString("base64")}`;
              setFile([...files, { file: file, base64: image }]);
              editor?.chain().focus().setImage({ src: image }).run();
            }
          }}
          hidden
        />
        <label htmlFor="upload">
          <MdUploadFile
            size={20}
            cursor={"pointer"}
            style={{ color: editor.isActive("bold") ? "orange" : "black" }}
          />
        </label>
      </form>
    </div>
  );
};
