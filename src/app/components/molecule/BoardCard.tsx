import Link from "next/link";
import CustomImage from "./CustomImage";

export default function BoardCard({
  title,
  contents,
  thumbnail,
  id,
}: {
  title: string;
  contents: string;
  thumbnail: any;
  id: number;
}) {
  return (
    <Link href={`/post/${id}`}>
      <div className="grid grid-cols-[20%_80%] min-w-[100vh] w-full border border-gray-400 mb-3 rounded-xl hover:bg-gray-100 min-h-56 max-h-56 overflow-hidden">
        <div className="w-min-56 min-h-56 max-h-56  bg-slate-200 relative block">
          <CustomImage src={thumbnail} alt={title} type="fill" />
        </div>
        <div className="grid grid-rows-[23%_77%] border-gray-400 border-l p-1">
          <span className="font-bold text-3xl border-b border-gray-400">
            <h1>{title}</h1>
          </span>
          <span className="mt-2">{contents}</span>
        </div>
      </div>
    </Link>
  );
}
