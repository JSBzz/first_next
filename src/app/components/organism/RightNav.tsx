import CustomImage from "../molecule/CustomImage";
import { Chat } from "./Chat";
import Game2048 from "./Game2048";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/next-auth/auth";
import MobileDetect from "mobile-detect";
import { isMobile } from "react-device-detect";

export async function RightNav() {
  if (isMobile) {
    return <></>;
  }
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed right-0 top-0 h-screen bg-gray-100 min-w-56 max-w-56">
      <div className="mt-2">
        <CustomImage.User src={session?.user?.image} />
      </div>
      {/* <div className="">
        <form className="w-fit flex">
          <select>
            <option>TEST</option>
          </select>
          <input type="text" />
          <button>search</button>
        </form>
      </div> */}
      <div className="h-full ">
        <div className="bg-slate-400 h-[31%] overflow-auto p-2 mt-2">
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          {/* <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div>
          <div>sadas</div> */}
        </div>
        <div className="bottom-0">
          <Game2048 />
          <div className="mt-1">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
