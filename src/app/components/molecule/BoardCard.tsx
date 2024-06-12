import Link from "next/link";
import CustomImage from "./CustomImage";
import { detailDate } from "@/app/_utils/CommonUtils";

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
      <div className="grid grid-cols-[auto_1fr] w-full border border-gray-400 mb-3 rounded-xl overflow-hidden text-ellipsis hover:bg-gray-100 min-h-44 max-h-44 ">
        <div className="min-w-32 w-44 bg-slate-200 relative flex items-center justify-center flex-wrap flex-row max-h-44 ">
          <CustomImage src={thumbnail} alt={title} type="fill" />
        </div>
        <div className="border-gray-400 border-l p-1 break-all ">
          <div className="flex-wrap flex border-b border-gray-300 md:flex-nowrap w-full">
            <div className="font-bold text-xl flex-col w-full md:w-full md:text-3xl">
              <h1 className="max-h-7 overflow-hidden md:max-h-11">{title}</h1>
            </div>
            <div className="text-gray-400 flex-col left-0 md:w-full right-0 text-right">
              <span>{detailDate(created_at)}</span>
            </div>
          </div>
          <p className="p-1 max-h-20 overflow-hidden">{contents}</p>
        </div>
      </div>
    </Link>
  );
}
