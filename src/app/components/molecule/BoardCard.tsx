import Link from "next/link";
import CustomImage from "./CustomImage";

export default function BoardCard({
  title,
  contents,
  thumbnail,
  id,
  created_at,
}: {
  title: string;
  contents: string;
  thumbnail: any;
  id: number;
  created_at: any;
}) {
  return (
    <Link href={`/post/${id}`}>
      <div className="grid grid-cols-[auto_1fr] w-full border border-gray-400 mb-3 rounded-xl hover:bg-gray-100 overflow-hidden min-h-44">
        <div className="min-w-32 w-44 bg-slate-200 relative flex items-center justify-center">
          <CustomImage src={thumbnail} alt={title} type="fill" />
        </div>
        <div className="border-gray-400 border-l p-1">
          <div className="w-full border-b border-gray-300 flex">
            <span className="font-bold text-3xl">
              <h1>{title}</h1>
            </span>
            <div className="text-gray-400 w-full text-right">{created_at}</div>
          </div>
          <div>
            <span className="mt-2">
              {contents.length > 100 ? contents.substr(0, 200) + "..." : contents}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
