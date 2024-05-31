import Link from "next/link";
import CustomImage from "./CustomImage";
import guest from "../../styles/images/guest.png";

export default function MemberCard({ userInfo }: any) {
  return (
    // <Link href={`/post/${id}`}>
    <div className="grid grid-cols-[20%_80%]  min-w-[60%] m-auto max-w-[60%]  w-full border border-gray-400 mb-3 rounded-xl hover:bg-gray-100 overflow-hidden">
      <div className="w-min-56  bg-slate-200 relative block">
        <CustomImage.User src={userInfo?.image ?? guest} alt={"userImage"} type="fill" />
      </div>
      <div className="grid grid-rows-[23%_77%] border-gray-400 border-l p-1">
        <span className="font-bold text-3xl border-b border-gray-400 ml-2">
          <h1>{userInfo?.nickname}</h1>
        </span>
        <span className="mt-2">
          {/* {contents.length > 100 ? contents.substr(0, 200) + "..." : contents} */}
        </span>
      </div>
    </div>
    // </Link>
  );
}
