import { Chat } from "./Chat";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/next-auth/auth";
import { Game } from "./Game";
import Image from "next/image";

export async function RightNav() {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed right-0 top-0 h-screen m-auto bg-gray-100 w-56 hidden sm:block ">
      <div className="relative w-1/6 pt-[16.66%] bg-gray-200">
        <div className="absolute top-0 left-0 w-full h-full items-center">
          {
            <Image
              src={session?.user?.image!}
              alt="UserProfile"
              className="m-auto rounded-full"
              fill
            />
          }
        </div>
      </div>
      <div className="h-full h-">
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
