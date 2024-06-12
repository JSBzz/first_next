import { Chat } from "./Chat";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/next-auth/auth";
import { Game } from "./Game";
import Image from "next/image";
import Link from "next/link";
import guestImage from "../../styles/images/guest.png";

export async function RightNav() {
  const session = await getServerSession(authOptions);
  const userImage = session?.user?.image ?? guestImage;
  return (
    <div className="fixed right-0 top-0 h-screen m-auto bg-gray-100 w-56 hidden">
      <div className="relative w-32 h-32">
        <div className="w-full h-full object-center m-auto">
          <Image src={userImage} alt="UserProfile" className="m-auto rounded-full" fill />
        </div>
      </div>
      <div className="h-full h-">
        <div className="bg-slate-400 h-[31%] overflow-auto p-2 mt-2">
          <Link href={"/"}>전체</Link>
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
        <div>
          <div>
            <Game />
            <div className="mt-1">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
